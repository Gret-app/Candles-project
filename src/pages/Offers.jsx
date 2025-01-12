// pages/Offers.jsx
import React from "react";
import ProductList from "../components/ProductList";
import "../App.css";

const Offers = ({ candles, updateRating, toggleFavorite }) => {
  const offers = candles.filter((candle) => candle.rating < 4);

  return (
    <div className="offers">
      <h4 className="centered-header">Oferta</h4>
      <ProductList
        candles={offers}
        updateRating={updateRating}
        toggleFavorite={toggleFavorite} // Przekazanie funkcji
      />
    </div>
  );
};

export default Offers;
