require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// MongoDB Connection
console.log("ENV VALUE:", process.env.MONGO_URL); // Debugging line to check the value of MONGO_URL
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Basic Routes
app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});

// Use Routes
app.use("/api", userRoutes);

// Server Start
const port = process.env.PORT ||3000;

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});