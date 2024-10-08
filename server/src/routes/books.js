import { Router } from "express";
import { booksCollection } from "../mongoClient.js";

const router = Router();

// Route for getting all books
router.get("/", async (req, res) => {
  try {
    const books = await booksCollection.find().toArray();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

export default router;
