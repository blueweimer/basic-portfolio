import express from "express";

// Create a new Router object
const router = express.Router();

// Define routes for various HTTP methods and their corresponding functions
router.get("/test", (req, res) => {
  res.json("this is post");
});

export default router;