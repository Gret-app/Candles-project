// pages/Offers.jsx
import React from "react";
import ProductList from "../components/ProductList";
import "../App.css";

const Offers = ({
  candles,
  updateRating,
  toggleFavorite,
  deleteCandle,
  editCandle,
}) => {
  const offers = candles.filter((candle) => candle.rating < 4);

  return (
    <div className="offers">
      <ProductList
        candles={offers}
        updateRating={updateRating}
        toggleFavorite={toggleFavorite}
        deleteCandle={deleteCandle}
        editCandle={editCandle} // Przekazanie funkcji
      />
    </div>
  );
};

export default Offers;
