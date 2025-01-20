import React from "react";
import ProductPage from "./ProductPage";

const MainPage = ({ candles, searchTerm, setSearchTerm, ...props }) => {
  // Sortowanie i ograniczenie do 4 najlepszych świec
  const topCandles = candles
    .sort((a, b) => b.rating - a.rating) // Sortowanie malejąco po ocenie
    .slice(0, 4); // Pobieramy tylko 4 najlepsze

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
