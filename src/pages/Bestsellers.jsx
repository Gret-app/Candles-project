import React from "react";
import ProductPage from "./ProductPage"; // Importujemy komponent ProductPage

const Bestsellers = (props) => {
  // Filtrowanie produktów o ocenie >= 4
  const bestsellers = props.candles.filter((candle) => candle.rating >= 4);

  return (
    <ProductPage
      {...props} // Przekazujemy wszystkie inne propsy (updateRating, toggleFavorite itd.)
      candles={bestsellers} // Tylko przefiltrowane produkty
      showSearchBar={false} // Wyłączamy pasek wyszukiwania
      showAdBanner={false} // Wyłączamy baner reklamowy
    />
  );
};

export default Bestsellers;
