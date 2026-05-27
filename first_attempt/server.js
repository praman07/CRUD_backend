const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config/db");

const app = express();

//express json middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

// API routes
app.use("/api/notes", require("./src/routes/noteRoutes"));

// Connect to DB then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  });
});
