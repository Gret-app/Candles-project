import React from "react";
import ProductPage from "./ProductPage";

const Bestsellers = (props) => {

  const bestsellers = props.candles.filter((candle) => candle.rating >= 4);

  return (
    <ProductPage
      {...props} 
      candles={bestsellers} 
      showSearchBar={false} 
      showAdBanner={false} 
    />
  );
};

export default Bestsellers;
