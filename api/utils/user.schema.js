import { z } from "zod";

const userValidator = z
  .object({
    name: z
      .string()
      .trim()
      .min(3, "The minimum length of the name should be 3"),
    email: z.string().email("Please provide correct email"),
    password: z.string().trim().min(6, "The minimum length should be 6"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords  do not match",
    path: ["passwordConfirm"],
  });

export default userValidator;
