import { Router } from "express";
import { booksCollection } from "../mongoClient.js";

const router = Router();

// Route for getting all books
router.get("/", async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      searchText,
      isAvailable,
      selectedGenres,
      yearFrom,
      yearTo,
      sortBy,
    } = req.query;

    const skip = (page - 1) * limit;
    const filterQuery = {};

    if (searchText) {
      filterQuery.title = { $regex: searchText, $options: "i" };
    }

    if (isAvailable === "true") {
      filterQuery.amountOfCopies = { $gt: 0 };
    }

    if (selectedGenres && selectedGenres.length) {
      const genresArray = selectedGenres.split(",");
      filterQuery.genres = { $in: genresArray };
    }

    if (yearFrom || yearTo) {
      filterQuery.publishDate = {};
      if (yearFrom) {
        filterQuery.publishDate.$gte = `${yearFrom}-01-01`;
      }
      if (yearTo) {
        filterQuery.publishDate.$lte = `${yearTo}-12-31`;
      }
    }

    let sortQuery = {};
    switch (sortBy) {
      case "highestRated":
        sortQuery.rating = -1;
        break;
      case "lowestRated":
        sortQuery.rating = 1;
        break;
      case "newest":
        sortQuery.publishDate = -1;
        break;
      case "oldest":
        sortQuery.publishDate = 1;
        break;
      case "morePages":
        sortQuery.pages = -1;
        break;
      case "lessPages":
        sortQuery.pages = 1;
        break;
      default:
        sortQuery.title = 1;
    }

    const books = await booksCollection
      .find(filterQuery)
      .sort(sortQuery)
      .skip(skip)
      .limit(parseInt(limit))
      .toArray();

    const totalBooks = await booksCollection.countDocuments(filterQuery);

    res.status(200).json({ books, totalBooks });
  } catch (error) {
    console.error("Error fetching books:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

// Route for getting one book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await booksCollection.findOne({ _id: id });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

export default router;
