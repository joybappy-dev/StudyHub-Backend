import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
dotenv.config();

const app = express();
app.use(express.json());

const db = await connectDB();
const usersCollection = db.collection("users");

app.get("/", (req, res) => res.send("Hello From Server"));

app.post("/users", async (req, res) => {
  const newUser = req;
  console.log(newUser);
  //   const user = await usersCollection.insertOne(newUser);
  //   res.status(200).json({ message: user });
});

app.listen(process.env.PORT, () => console.log("Server is up 🚀"));
