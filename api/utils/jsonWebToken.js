import jwt from "jsonwebtoken";

export const createToken = (id, email) => {
  const generatedToken = jwt.sign({ id, email }, process.env.PRIVATE_KEY, {
    expiresIn: "9d",
  });
  return generatedToken;
};
