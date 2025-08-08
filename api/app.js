import express from "express";
import morgan from "morgan";
const app = express();
import cookieParser from "cookie-parser";

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
