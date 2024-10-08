import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  box-shadow: 1px 1px 5px #99c8ff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;

  > img {
    width: 100%;
    height: 20%;
    object-fit: contain;
    object-position: center;
    margin-bottom: 10px;
  }

  > h3 {
    margin-bottom: 10px;
    font-size: 1rem;
  }

  p {
    font-size: 0.8rem;
    color: #ccc;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  > div.genres {
    margin: 10px 0;
    font-size: 12px;
    font-style: italic;
    color: #aaa;
  }

  > button {
    margin: 10px;
  }
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: auto;
  gap: 10px;
  align-items: start;
`;

const BookCard = ({ book }) => {
  return (
    <StyledDiv>
      <img src={book.imageUrl} alt={`${book.title} cover`} />
      <h3>{book.title}</h3>
      <p>{book.description.slice(0, 100)}...</p>
      <span>{book.author}</span>
      <div className="genres">{book.genres.join(", ")}</div>
      <span>
        Published on: {new Date(book.publishDate).toLocaleDateString()}
      </span>
      <a href={`/books/${book._id}`} target="_blank" rel="noopener noreferrer">
        <button>Read More</button>
      </a>
    </StyledDiv>
  );
};

export default BookCard;
