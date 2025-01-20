import React, { useState, useEffect } from "react";
import "./AdBanner.css";

const ads = [
  { id: 1, text: "Promocja na świece sojowe! -20%", image: "ad1.jpg" },
  { id: 2, text: "Kup 3, zapłać za 2! Oferta ograniczona.", image: "ad2.jpg" },
  {
    id: 3,
    text: "Nowa kolekcja zapachów dostępna już dziś!",
    image: "ad3.jpg",
  },
];

function AdBanner() {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const currentAd = ads[currentAdIndex];

  return (
    <div className="ad-banner">
      <img src={require(`../assets/${currentAd.image}`)} alt={currentAd.text} />
      <p>{currentAd.text}</p>
    </div>
  );
}

export default AdBanner;
