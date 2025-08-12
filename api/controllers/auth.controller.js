import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const register = async (req, res) => {
  console.log("hello");

  try {
    const { passwordConfirm, ...userDetail } = req.validatedData;

    const user = await prisma.user.create({
      data: userDetail,
    });
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
};
