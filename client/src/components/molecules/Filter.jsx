// TODO styling

import { useState } from "react";

const Filter = ({ onFilter }) => {
  const [searchText, setSearchText] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");

  const genres = ["Fiction", "Non-Fiction", "Science", "Biography"];

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleFilter = () => {
    onFilter({ searchText, isAvailable, selectedGenres, yearFrom, yearTo });
  };

  const clearFilters = () => {
    setSearchText("");
    setIsAvailable(false);
    setSelectedGenres([]);
    setYearFrom("");
    setYearTo("");

    onFilter({
      searchText: "",
      isAvailable: false,
      selectedGenres: [],
      yearFrom: "",
      yearTo: "",
    });
  };

  return (
    <fieldset>
      <legend>Filter</legend>
      <div>
        <label>Search: </label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        <label>Available: </label>
        <input
          type="checkbox"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
        />
      </div>
      <div>
        <label>Genres: </label>
        {genres.map((genre) => (
          <label key={genre}>
            <input
              type="checkbox"
              value={genre}
              checked={selectedGenres.includes(genre)}
              onChange={() => handleGenreChange(genre)}
            />
            {genre}
          </label>
        ))}
      </div>
      <div>
        <label>Year From: </label>
        <input
          type="number"
          value={yearFrom}
          onChange={(e) => setYearFrom(e.target.value)}
        />
      </div>
      <div>
        <label>Year To: </label>
        <input
          type="number"
          value={yearTo}
          onChange={(e) => setYearTo(e.target.value)}
        />
      </div>
      <button onClick={handleFilter}>Apply</button>
      <button onClick={clearFilters}>Clear</button>
    </fieldset>
  );
};

export default Filter;
