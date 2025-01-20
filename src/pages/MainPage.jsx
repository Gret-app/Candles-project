import React from "react";
import ProductPage from "./ProductPage";

const MainPage = ({ candles, searchTerm, setSearchTerm, ...props }) => {
  const topCandles = candles.sort((a, b) => b.rating - a.rating).slice(0, 4);

  return (
    <ProductPage
      {...props}
      candles={topCandles}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      showSearchBar={true}
      title="Najlepiej oceniane produkty"
      showAdBanner={true}
    />
  );
};

export default MainPage;
