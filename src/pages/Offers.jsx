import React from "react";
import ProductPage from "./ProductPage";

const Offers = (props) => {
  // Filtrowanie produktów o ocenie poniżej 4
  const offers = props.candles.filter((candle) => candle.rating < 4);

  return (
    <ProductPage
      {...props} // Przekazujemy wszystkie inne propsy (updateRating, toggleFavorite itd.)
      candles={offers} // Tylko przefiltrowane produkty
      showSearchBar={false} // Wyłączamy pasek wyszukiwania
      showAdBanner={false} // Wyłączamy baner reklamowy
    />
  );
};

export default Offers;
