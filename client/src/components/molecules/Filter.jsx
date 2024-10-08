import { useState } from "react";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  > div.searchAndAvailable {
    margin-bottom: 5px;
    display: flex;
    justify-content: start;
    gap: 20px;
    > div:first-child {
      > input {
        width: 200px;
      }
    }
  }
  > div.genres {
    margin-bottom: 5px;
  }
  > div.yearFromAndTo {
    display: flex;
    gap: 20px;
    margin-bottom: 5px;
    > div {
      > input {
        width: 60px;
      }
    }
  }
  > div.btnsApplyAndClear {
    display: flex;
    gap: 10px;
  }
`;

const Filter = ({ onFilter }) => {
  const [searchText, setSearchText] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");

  const genres = ["Drama", "Fiction", "Contemporary", "Classic"];

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
    <StyledFieldset>
      <legend>Filter</legend>
      <div className="searchAndAvailable">
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
      </div>
      <div className="genres">
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
      <div className="yearFromAndTo">
        <div>
          <label>Year from: </label>
          <input
            type="number"
            value={yearFrom}
            onChange={(e) => setYearFrom(e.target.value)}
          />
        </div>
        <div>
          <label> to: </label>
          <input
            type="number"
            value={yearTo}
            onChange={(e) => setYearTo(e.target.value)}
          />
        </div>
      </div>
      <div className="btnsApplyAndClear">
        <button onClick={handleFilter}>Apply</button>
        <button onClick={clearFilters}>Clear</button>
      </div>
    </StyledFieldset>
  );
};

export default Filter;
