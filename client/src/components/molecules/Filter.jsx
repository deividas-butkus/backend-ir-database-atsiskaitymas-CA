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
  // const [yearFrom, setYearFrom] = useState("");
  // const [yearTo, setYearTo] = useState("");
  const [years, setYears] = useState({ yearFrom: "", yearTo: "" });

  const genres = ["Drama", "Fiction", "Contemporary", "Classic"];

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handleYearChange = (e) => {
    const { name, value } = e.target;
    setYears((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilter = (e) => {
    e.preventDefault();
    onFilter({ searchText, isAvailable, selectedGenres, ...years });
  };

  const clearFilters = () => {
    setSearchText("");
    setIsAvailable(false);
    setSelectedGenres([]);
    setYears({ yearFrom: "", yearTo: "" });

    onFilter({
      searchText: "",
      isAvailable: false,
      selectedGenres: [],
      yearFrom: "",
      yearTo: "",
    });
  };

  return (
    <form onSubmit={handleFilter}>
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
              name="yearFrom"
              value={years.yearFrom}
              onChange={handleYearChange}
            />
          </div>
          <div>
            <label> to: </label>
            <input
              type="number"
              value={years.yearTo}
              name="yearTo"
              onChange={handleYearChange}
              max={new Date().getFullYear()}
            />
          </div>
        </div>
        <div className="btnsApplyAndClear">
          <button type="submit">Apply</button>
          <button type="button" onClick={clearFilters}>
            Clear
          </button>
        </div>
      </StyledFieldset>
    </form>
  );
};

export default Filter;
