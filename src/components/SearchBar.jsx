import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Szukasz: ${searchTerm}`); // Zastąpić alert logiką wyszukiwania
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Wyszukaj produkt..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Szukaj</button>
      </form>
    </div>
  );
}

export default SearchBar;
