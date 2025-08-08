import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import app from "./app.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
