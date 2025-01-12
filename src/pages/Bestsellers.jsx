// Bestsellers.jsx
import React from "react";
import ProductList from "../components/ProductList";
import "../App.css";

const Bestsellers = ({ candles, updateRating, toggleFavorite }) => {
  const bestsellers = candles.filter((candle) => candle.rating >= 4);

  return (
    <div className="bestsellers">
      <h4 className="centered-header">Bestsellers</h4>
      <ProductList
        candles={bestsellers}
        updateRating={updateRating}
        toggleFavorite={toggleFavorite} // Przekazanie funkcji
      />
    </div>
  );
};

export default Bestsellers;
