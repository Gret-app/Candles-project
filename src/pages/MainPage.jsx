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
  // Dodano editCandle
  // Filtrujemy produkty o ocenie powyżej 4.3
  const highRatedCandles = candles.filter((candle) => candle.rating > 4.3);

  // Sortujemy produkty według oceny malejąco
  const sortedCandles = highRatedCandles.sort((a, b) => b.rating - a.rating);

  // Pobieranie 5 najlepszych produktów
  let topSixCandles = sortedCandles.slice(0, 5);

  // Jeżeli mamy mniej niż 5 produktów, dobieramy pozostałe
  if (topSixCandles.length < 5) {
    const remainingCandles = candles
      .filter((candle) => !topSixCandles.includes(candle)) // Pomijamy już wybrane produkty
      .sort((a, b) => b.rating - a.rating); // Sortujemy pozostałe produkty

    // Dobieramy produkty z oceną poniżej 4.3
    const additionalCandles = remainingCandles.filter(
      (candle) => candle.rating <= 4.3
    );

    // Dodajemy brakujące produkty
    topSixCandles = topSixCandles.concat(
      remainingCandles.slice(
        0,
        Math.min(5 - topSixCandles.length, remainingCandles.length)
      )
    );

    // Jeśli nadal nie mamy 5 produktów, dodajemy najbliższe oceną do 4.3
    if (topSixCandles.length < 5) {
      const closestToThreshold = additionalCandles.slice(
        0,
        5 - topSixCandles.length
      );
      topSixCandles = topSixCandles.concat(closestToThreshold);
    }
  }

  return (
    <div className="main-page">
      <SearchBar />
      <AdBanner />
      <h4 className="centered-header">Najlepiej oceniane produkty</h4>
      <ProductList
        candles={topSixCandles}
        updateRating={updateRating}
        deleteCandle={deleteCandle}
        editCandle={editCandle} // Przekazujemy funkcję edycji
        toggleFavorite={toggleFavorite} // Przekazanie funkcji
      />
    </div>
  );
};

export default MainPage;
