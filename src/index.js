import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();

const db = await connectDB();
const usersCollection = db.collection("users");

app.get("/", (req, res) => res.send("Hello From Server"));

app.post("/joy", (req, res) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(process.env.PORT, () => console.log("Server is up 🚀"));
