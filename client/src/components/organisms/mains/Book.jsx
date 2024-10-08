import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBook = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 40px;
  max-width: 900px;

  img {
    max-width: 300px;
    margin-left: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .details {
    flex: 1;
    text-align: left;

    h2 {
      margin-bottom: 16px;
    }

    p {
      margin: 8px 0;
    }
  }
`;

const Book = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`/api/books/${bookId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch book details");
        }
        const data = await response.json();
        setBook(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]);

  if (loading) return <p>Loading book details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <StyledBook>
      <div className="details">
        <h2>{book.title}</h2>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Description:</strong> {book.description}
        </p>
        <p>
          <strong>Genres:</strong> {book.genres.join(", ")}
        </p>
        <p>
          <strong>Pages:</strong> {book.pages}
        </p>
        <p>
          <strong>Publish Date:</strong>{" "}
          {new Date(book.publishDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Rating:</strong> {book.rating}
        </p>
        <p>
          <strong>Available Copies:</strong> {book.amountOfCopies}
        </p>
      </div>
      <img src={book.imageUrl} alt={book.title} />
    </StyledBook>
  );
};

export default Book;
