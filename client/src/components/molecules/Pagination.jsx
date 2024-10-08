// TODO - styling

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
    <fieldset>
      <legend>Pages</legend>
      <div>
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
    </fieldset>
  );
};

export default Pagination;
