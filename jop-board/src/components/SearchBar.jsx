import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search jobs..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;
