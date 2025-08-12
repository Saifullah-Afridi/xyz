import { z } from "zod";

const userSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .min(3, "The minimum length of the name should be 3"),
    email: z
      .string({ required_error: "Email is required" })
      .email("Please provide correct email"),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "The minimum length should be 6"),
    passwordConfirm: z.string({
      required_error: "Password confirm is required",
    }),
    role: z.enum(["USER", "SELLER"]),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });

export default userSchema;
