import { register } from "../controllers/auth.controller.js";
import express from "express";
const router = express.Router();
import userSchema from "../utils/userSchema.js";
import { validator } from "../utils/validator.js";

router.post("/register", validator(userSchema), register);

export default router;
