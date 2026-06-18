import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();

app.get("/", (req, res) => res.send("Hello From Server"));
connectDB();

app.listen(process.env.PORT, () => console.log("Server is up 🚀"));
