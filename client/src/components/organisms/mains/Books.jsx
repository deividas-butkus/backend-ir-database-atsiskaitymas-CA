import { useState, useEffect } from "react";
import styled from "styled-components";

import BookCard from "../../molecules/BookCard";
import Pagination from "../../molecules/Pagination";

const StyledSection = styled.section`
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  > section {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
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

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `/api/books?page=${currentPage}&limit=${booksPerPage}`
        );
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
  }, [currentPage]);

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
      <section>
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </section>
    </StyledSection>
  );
};

export default Books;
