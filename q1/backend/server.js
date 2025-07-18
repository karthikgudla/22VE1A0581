// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

// Import routes
const urlRoutes = require("./routes/urlRoutes");

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/shorturls", urlRoutes);

// Connect to MongoDB using URI from .env
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
    // Start the server
    app.listen(8000, () => {
      console.log("🚀 Server is running at http://localhost:8000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
