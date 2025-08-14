import { PrismaClient } from "@prisma/client";
import hashPassword from "../utils/hashPassword.js";
import { createToken, verifToken } from "../utils/jsonWebToken.js";
import { comparePassword } from "../utils/comparePassword.js";

const prisma = new PrismaClient();

export const register = async (req, res) => {
  try {
    let { name, email, password, role } = req.validatedData;

    password = hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updateAt: true,
      },
    });
    const token = createToken(user.id, user.email);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 1000 * 15 * 60,
      secure: false,
    });
    res.status(201).json({
      status: "success",
      message: "User has been successfully created",
      user,
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        password: true,
      },
    });

    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "Please provide correct credientails",
      });
    }

    const isPasswordMatched = await comparePassword(password, user.password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        status: "fail",
        message: "Please provide correct credientails",
      });
    }

    const { password: userPassword, ...userDetails } = user;
    const token = createToken(user.id, user.email);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 1000 * 15 * 60,
      secure: false,
    });
    res.status(200).json({
      status: "success",
      user: userDetails,
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
    });
  }
};

export const protectedRoute = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token && req.cookies.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ message: "Please login and try again" });
    }

    const data = verifToken(token);
    const user = await prisma.user.findUnique({
      where: {
        id: data.id,
        email: data.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updateAt: true,
      },
    });

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "something went wrong,try again later",
      error: error,
    });
  }
};
