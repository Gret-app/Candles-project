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
  const [editData, setEditData] = useState({
    name: candle.name,
    price: candle.price,
    rating: candle.rating,
    image: candle.image,
  });
  const [menuVisible, setMenuVisible] = useState(false);

  const menuRef = useRef(null);

  const handleRatingChange = () => {
    updateRating(candle.id, parseFloat(newRating));
  };

  const handleDelete = () => {
    deleteCandle(candle.id);
    setMenuVisible(false);
  };

  const handleEdit = () => {
    editCandle(candle.id, editData);
    setIsEditing(false);
    setMenuVisible(false);
  };

  // Zamknij menu po kliknięciu poza nim
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

  const handleFavoriteToggle = () => {
    toggleFavorite(candle.id);
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
        {candle.isFavorite ? "⭐" : "☆"}
      </div>

      {!isEditing ? (
        <>
          <img src={candle.image} alt={candle.name} className="product-image" />
          <h2>{candle.name}</h2>
          <p>Cena: {candle.price.toFixed(2)} zł</p>
          <p>Ocena: {candle.rating} ⭐</p>

          {/* Sekcja oceniania */}
          <div className="rating-update">
            <input
              type="number"
              value={newRating}
              step="0.1"
              min="0"
              max="5"
              onChange={(e) => setNewRating(e.target.value)}
            />
            <button onClick={handleRatingChange}>Oceń</button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
          />
          <input
            type="number"
            value={editData.price}
            onChange={(e) =>
              setEditData({ ...editData, price: parseFloat(e.target.value) })
            }
          />
          <input
            type="number"
            value={editData.rating}
            onChange={(e) =>
              setEditData({ ...editData, rating: parseFloat(e.target.value) })
            }
          />
          <input
            type="text"
            value={editData.image}
            onChange={(e) =>
              setEditData({ ...editData, image: e.target.value })
            }
          />
          <button onClick={handleEdit}>Zapisz</button>
          <button onClick={() => setIsEditing(false)}>Anuluj</button>
        </>
      )}
    </div>
  );
};

export default Product;
