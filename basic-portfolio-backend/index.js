// index.js
import express from "express";
import postRoutes from "./routes/posts.js";

// instance of express
const app = express();

// Use the built-in JSON
app.use("/basic-portfolio-backend/posts", postRoutes);

// Start server 8800
app.listen(8800, () => {
  console.log("Connected...");
});