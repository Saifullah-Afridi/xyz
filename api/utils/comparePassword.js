import bcrypt from "bcryptjs";

export const comparePassword = async (plainPassword, hashPassword) => {
  const isMatched = await bcrypt.compare(plainPassword, hashPassword);
  return isMatched;
};
