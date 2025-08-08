import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  cors({
    origin: [],
    methods: ["GET", "POST", "UPDATE", "DELETE"],
    Credential: true,
  })
);

app.get("/", (req, res) => {
  res.send("welcome to our website");
});

export default app;
