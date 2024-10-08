import { useState, useEffect } from "react";
import styled from "styled-components";

import BookCard from "../../molecules/BookCard";
import Pagination from "../../molecules/Pagination";
import Filter from "../../molecules/Filter";
import Sort from "../../molecules/Sort";

const StyledSection = styled.section`
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    > div.filterAndSortAndPages {
      display: flex;
      gap: 10px;
    }
  }
  > section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-items: center;
    align-items: start;
    gap: 10px;
    > p {
      grid-column: 1 / -1;
      color: #ed3484;
      text-align: center;
    }
  }
`;

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { searchText, isAvailable, selectedGenres, yearFrom, yearTo } =
          filters;

        const queryParams = new URLSearchParams({
          page: currentPage,
          limit: booksPerPage,
          searchText: searchText || "",
          isAvailable: isAvailable ? "true" : "false",
          selectedGenres: selectedGenres ? selectedGenres.join(",") : "",
          yearFrom: yearFrom || "",
          yearTo: yearTo || "",
          sortBy: sortOption,
        });

        const response = await fetch(`/api/books?${queryParams.toString()}`);
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const { books, totalBooks } = await response.json();
        setBooks(books);
        setTotalBooks(totalBooks);
        setTotalPages(Math.ceil(totalBooks / booksPerPage));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [currentPage, filters, sortOption]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const applySort = (sortOption) => {
    setSortOption(sortOption); // Update the sort option
  };

  const startBookIndex = (currentPage - 1) * booksPerPage + 1;
  const endBookIndex =
    startBookIndex + books.length - 1 > totalBooks
      ? totalBooks
      : startBookIndex + books.length - 1;

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <StyledSection>
      <div>
        <h2>Books</h2>
        <div className="filterAndSortAndPages">
          <Filter onFilter={applyFilters} />
          <Sort onSort={applySort} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onNext={handleNextPage}
            onPrevious={handlePreviousPage}
            startBookIndex={startBookIndex}
            endBookIndex={endBookIndex}
            totalBooks={totalBooks}
          />
        </div>
      </div>
      <section>
        {books.length > 0 ? (
          books.map((book) => <BookCard key={book._id} book={book} />)
        ) : (
          <p className="no-books-message">
            No books found for the selected filters.
          </p>
        )}
      </section>
    </StyledSection>
  );
};

export default Books;
