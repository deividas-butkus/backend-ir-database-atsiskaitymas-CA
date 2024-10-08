import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  box-shadow: 1px 1px 5px #99c8ff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  > div {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    > img {
      width: 30%;
      height: 100px;
      object-fit: cover;
      object-position: center;
      margin-bottom: 10px;
    }
    > div {
      > h3 {
        margin: 0;
        font-size: 0.9rem;
        display: -webkit-box; /* Required for line clamping */
        -webkit-line-clamp: 2; /* Number of lines to show */
        -webkit-box-orient: vertical; /* Required for -webkit-line-clamp */
        overflow: hidden; /* Hide the overflowed text */
        text-overflow: ellipsis; /* Add "..." at the end of overflow */
      }
      > h4 {
        margin: 10px 0 10px;
        font-weight: 200;
        font-size: 0.7rem;
        > span {
          font-style: italic;
        }
      }
      > h5 {
        margin: 0;
        font-weight: 200;
        font-size: 0.7rem;
      }
    }
  }

  p {
    font-size: 0.8rem;
    color: #ccc;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    height: 5rem;
    line-height: 1.25rem;
    text-align: justify;
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
      <div>
        <div>
          <h3>{book.title}</h3>
          <h4>
            <span>By</span> {book.author}
          </h4>
          <h5>
            Published on: {new Date(book.publishDate).toLocaleDateString()}
          </h5>
        </div>
        <img src={book.imageUrl} alt={`${book.title} cover`} />
      </div>
      <p>{book.description.slice(0, 100)}...</p>
      <div className="genres">{book.genres.join(", ")}</div>

      <a href={`/books/${book._id}`} target="_blank" rel="noopener noreferrer">
        <button>Read More</button>
      </a>
    </StyledDiv>
  );
};

export default BookCard;
