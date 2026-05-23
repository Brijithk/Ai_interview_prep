const express = require("express");

const app = express();
const authRoutes = require("./routes/authRoutes");
app.use(express.json());

require("dotenv").config();

const connectDB = require("./config/db");
app.use("/api/auth", authRoutes);
connectDB();

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.listen(5000, () => {
  console.log("Server Started");
});