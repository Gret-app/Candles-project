import React from "react";
import ProductPage from "./ProductPage";

const Offers = (props) => {
  const offers = props.candles.filter((candle) => candle.rating < 4);

  return (
    <ProductPage
      {...props}
      candles={offers}
      showSearchBar={false}
      showAdBanner={false}
    />
  );
};

export default Offers;
