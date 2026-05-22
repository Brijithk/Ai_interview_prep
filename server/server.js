const express = require("express");

const app = express();

app.use(express.json());

require("dotenv").config();

const connectDB = require("./config/db");

connectDB();

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server Started");
});