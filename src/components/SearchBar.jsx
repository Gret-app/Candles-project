import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Przekazuje wprowadzone dane do rodzica
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Wyszukaj świeczkę..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
