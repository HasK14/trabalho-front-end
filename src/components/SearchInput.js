import React from "react";
import "./SearchInput.css";

const SearchInput = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      placeholder="Busque um Anime"
      className="searchInput"
      type="search"
      value={value}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
