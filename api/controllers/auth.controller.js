import { PrismaClient } from "@prisma/client";
import hashPassword from "../utils/hashPassword.js";
import { createToken } from "../utils/jsonWebToken.js";
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
      },
    });
    const token = createToken(user.id, user.email);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 1000 * 15 * 60,
      secure: false,
    });
    res.status(200).json({
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

    const isPasswordMatched = comparePassword(password, user.password);

    if (!isPasswordMatched) {
      return res.status(401).json({
        status: "fail",
        message: "Please provide correct credientails",
      });
    }
    const token = createToken(user.id, user.email);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 1000 * 15 * 60,
      secure: false,
    });
    res.status(200).json({
      status: "success",
      user,
      token,
    });
  } catch (error) {}
};
