import React, { useState, useEffect, useRef } from "react";
import "./Product.css";

const Product = ({
  candle,
  updateRating,
  deleteCandle,
  editCandle,
  toggleFavorite,
}) => {
  const [newRating, setNewRating] = useState(candle.rating);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...candle });
  const [menuVisible, setMenuVisible] = useState(false);

  const menuRef = useRef(null);

  // Obsługa kliknięcia poza menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "rating" ? parseFloat(value) : value,
    }));
  };

  const handleRatingChange = () =>
    updateRating(candle.id, parseFloat(newRating));

  const handleFavoriteToggle = () => toggleFavorite(candle.id);

  const handleDelete = () => {
    deleteCandle(candle.id);
    setMenuVisible(false);
  };

  const handleEdit = () => {
    editCandle(candle.id, editData);
    setIsEditing(false);
    setMenuVisible(false);
  };

  return (
    <div className="product-card">
      {/* Menu opcji */}
      <div className="menu-container" ref={menuRef}>
        <button
          className="menu-toggle"
          onClick={() => setMenuVisible((prev) => !prev)}
        >
          ⋮
        </button>
        {menuVisible && (
          <div className="menu-options">
            <button onClick={() => setIsEditing(true)}>Edytuj</button>
            <button onClick={handleDelete}>Usuń</button>
          </div>
        )}
      </div>

      <div className="favorite-icon" onClick={handleFavoriteToggle}>
        {candle.isFavorite ? "★" : "☆"}
      </div>

      {!isEditing ? (
        <>
          <img src={candle.image} alt={candle.name} className="product-image" />
          <h2>{candle.name}</h2>
          <p>Cena: {candle.price.toFixed(2)} zł</p>
          <p>Ocena: {candle.rating} ★ </p>

          {/* Sekcja oceniania */}
          <div>
            <input
              type="number"
              value={newRating}
              step="0.1"
              min="0"
              max="5"
              onChange={(e) => setNewRating(e.target.value)}
            />
            <button
              className="rating-update-button"
              onClick={handleRatingChange}
            >
              Oceń
            </button>
          </div>
        </>
      ) : (
        <>
          {["name", "price", "rating", "image"].map((field) => (
            <input
              key={field}
              type={field === "price" || field === "rating" ? "number" : "text"}
              name={field}
              value={editData[field]}
              onChange={handleInputChange}
              placeholder={`Wprowadź ${field}`}
            />
          ))}
          <button className="rating-update-button" onClick={handleEdit}>
            Zapisz
          </button>
          <button
            className="rating-update-button"
            onClick={() => setIsEditing(false)}
          >
            Anuluj
          </button>
        </>
      )}
    </div>
  );
};

export default Product;
