import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
import userRoutes from "./routes/userRoutes.js";

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

//routes

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("welcome to our website");
});

export default app;
