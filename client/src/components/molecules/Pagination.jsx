import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  div.previousAndPageAndNext {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  > p {
    margin: 5px 0 0;
    text-align: center;
  }
`;

const Pagination = ({
  currentPage,
  totalPages,
  onNext,
  onPrevious,
  startBookIndex,
  endBookIndex,
  totalBooks,
}) => {
  return (
    <StyledFieldset>
      <legend>Pages</legend>
      <div className="previousAndPageAndNext">
        <button onClick={onPrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={onNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <p>
        Showing {startBookIndex} to {endBookIndex} of {totalBooks} books
      </p>
    </StyledFieldset>
  );
};

export default Pagination;
