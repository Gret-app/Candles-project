import React, { useState } from "react";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";
import AdBanner from "../components/AdBanner";
import "../App.css";

const ProductPage = ({
  title,
  candles,
  updateRating,
  toggleFavorite,
  deleteCandle,
  editCandle,
  showSearchBar = true,
  showAdBanner = true,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCandles = candles.filter((candle) =>
    candle.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-page">
      {showSearchBar && (
        <SearchBar onSearch={(query) => setSearchQuery(query)} />
      )}
      {showAdBanner && <AdBanner />}
      <h3>{title}</h3>
      <ProductList
        candles={filteredCandles}
        updateRating={updateRating}
        toggleFavorite={toggleFavorite}
        deleteCandle={deleteCandle}
        editCandle={editCandle}
      />
    </div>
  );
};

export default ProductPage;
