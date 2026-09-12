import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  return res.status(200).json({ status: "healthy", message: "all is good??" });
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "hello from bhavesh v2" });
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
