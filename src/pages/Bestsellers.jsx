// Bestsellers.jsx
import React from "react";
import ProductList from "../components/ProductList";
import "../App.css";

const Bestsellers = ({
  candles,
  updateRating,
  toggleFavorite,
  deleteCandle,
  editCandle,
}) => {
  const bestsellers = candles.filter((candle) => candle.rating >= 4);

  return (
    <div className="bestsellers">
      <ProductList
        candles={bestsellers}
        updateRating={updateRating}
        toggleFavorite={toggleFavorite}
        deleteCandle={deleteCandle}
        editCandle={editCandle}
      />
    </div>
  );
};

export default Bestsellers;
