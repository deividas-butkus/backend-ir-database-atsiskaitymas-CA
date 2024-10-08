import { Router } from "express";
import { booksCollection } from "../mongoClient.js";

const router = Router();

// Route for getting all books
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const books = await booksCollection
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalBooks = await booksCollection.countDocuments();

    res.status(200).json({ books, totalBooks });
  } catch (error) {
    console.error("Error fetching books:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

export default router;
