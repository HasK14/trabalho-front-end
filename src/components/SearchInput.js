import React, { useState } from "react";
import "./SearchInput.css";
import "../pages/Home.css";

const SearchInput = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div>
      <input
        placeholder="Busque um Anime"
        className="searchInput"
        type="search"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className="button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchInput;
