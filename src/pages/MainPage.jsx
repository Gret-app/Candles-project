/* eslint-disable no-const-assign */
import React from "react";
import ProductList from "../components/ProductList";
import AdBanner from "../components/AdBanner";
import SearchBar from "../components/SearchBar";
import "../App.css";

const MainPage = ({
  candles,
  updateRating,
  deleteCandle,
  editCandle,
  toggleFavorite,
}) => {
  // Pobieramy 5 najlepiej ocenianych produktów
  const topCandles = candles
    .sort((a, b) => b.rating - a.rating) // Sortujemy malejąco po ocenie
    .slice(0, 5); // Pobieramy pierwsze 5 elementów

  return (
    <div className="main-page">
      <SearchBar />
      <AdBanner />
      <h2 className="header">Najlepiej oceniane produkty</h2>
      <ProductList
        candles={topCandles}
        updateRating={updateRating}
        deleteCandle={deleteCandle}
        editCandle={editCandle}
        toggleFavorite={toggleFavorite} // Przekazanie funkcji
      />
    </div>
  );
};

export default MainPage;
