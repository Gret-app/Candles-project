// ProductList.jsx
import React from "react";
import Product from "./Product";
import "./ProductList.css";

const ProductList = ({
  candles,
  updateRating,
  deleteCandle,
  editCandle,
  toggleFavorite,
}) => {
  return (
    <div className="product-list">
      <div className="products-grid">
        {candles.map((candle) => (
          <Product
            key={candle.id}
            candle={candle}
            updateRating={updateRating}
            deleteCandle={deleteCandle}
            editCandle={editCandle}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
