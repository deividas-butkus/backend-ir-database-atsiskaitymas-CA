import { useState } from "react";

const Sort = ({ onSort }) => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSort(e.target.value);
  };

  return (
    <fieldset>
      <legend>Sort By</legend>
      <select value={sortOption} onChange={handleSortChange}>
        <option value="">Select an option</option>
        <option value="highestRated">Highest Rated First</option>
        <option value="lowestRated">Lowest Rated First</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="morePages">More Pages First</option>
        <option value="lessPages">Less Pages First</option>
      </select>
    </fieldset>
  );
};

export default Sort;
