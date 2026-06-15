import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is Up",
  });
});

app.listen(port, () => {
  console.log(`Server is up at: ${port}`);
});
