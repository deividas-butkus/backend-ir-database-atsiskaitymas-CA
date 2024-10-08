import { useState, useEffect } from "react";
import styled from "styled-components";

import BookCard from "../../molecules/BookCard";

const StyledSection = styled.section`
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

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>{error}</p>;

  return (
    <StyledSection>
      <h2>Books</h2>
      <section>
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </section>
    </StyledSection>
  );
};

export default Books;
