import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bestsellers from "./pages/Bestsellers";
import Offers from "./pages/Offers";
import MainPage from "./pages/MainPage";
import AddProduct from "./pages/AddProduct";
import { candles as initialCandles } from "./data/candles";
import app from "./data/firebaseConfig";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

function App() {
  useEffect(() => {
    console.log("Firebase działa!", app);
  }, []);

  const [candles, setCandles] = useState(initialCandles);
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrowanie świec na podstawie wpisanego tekstu
  const filteredCandles = candles.filter((candle) =>
    candle.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateRating = (id, newRating) => {
    setCandles((prevCandles) =>
      prevCandles.map((candle) =>
        candle.id === id ? { ...candle, rating: newRating } : candle
      )
    );
  };

  const toggleFavorite = (id) => {
    setCandles((prevCandles) =>
      prevCandles.map((candle) =>
        candle.id === id
          ? { ...candle, isFavorite: !candle.isFavorite }
          : candle
      )
    );
  };

  const deleteCandle = (id) => {
    setCandles((prevCandles) =>
      prevCandles.filter((candle) => candle.id !== id)
    );
  };

  const editCandle = (id, updatedCandle) => {
    setCandles((prevCandles) =>
      prevCandles.map((candle) =>
        candle.id === id ? { ...candle, ...updatedCandle } : candle
      )
    );
  };

  const addCandle = (newCandle) => {
    setCandles((prevCandles) => [...prevCandles, newCandle]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              updateRating={updateRating}
              deleteCandle={deleteCandle}
              editCandle={editCandle}
              toggleFavorite={toggleFavorite}
              candles={filteredCandles}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path="/bestsellery"
          element={
            <Bestsellers
              updateRating={updateRating}
              deleteCandle={deleteCandle}
              editCandle={editCandle}
              toggleFavorite={toggleFavorite}
              candles={filteredCandles}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route
          path="/oferta"
          element={
            <Offers
              updateRating={updateRating}
              deleteCandle={deleteCandle}
              editCandle={editCandle}
              toggleFavorite={toggleFavorite}
              candles={filteredCandles}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />
        <Route path="/dodaj" element={<AddProduct addCandle={addCandle} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
