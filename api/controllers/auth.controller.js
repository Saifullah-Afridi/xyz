import { PrismaClient } from "@prisma/client";
import hashPassword from "../utils/hashPassword";

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
        name: true,
        email: true,
        role: true,
      },
    });
    res.status(200).json({
      status: "success",
      message: "User has been successfully created",

      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({ error });
  }
};
