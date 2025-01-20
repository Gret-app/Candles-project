import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({ addCandle }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    rating: "",
    image: "",
  });

  // Obsługa zmian w polach formularza
  const handleChange = ({ target: { name, value } }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Obsługa przesłania formularza
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, price, rating, image } = formData;

    if (!name || !price || !rating || !image) {
      return alert("Wszystkie pola muszą być wypełnione.");
    }

    const newCandle = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      rating: parseFloat(rating),
      image,
    };

    alert(`Produkt "${name}" został pomyślnie dodany do oferty!`);
    addCandle(newCandle);

    // Reset formularza
    setFormData({ name: "", price: "", rating: "", image: "" });
  };

  return (
    <div className="add-product">
      <h2>Dodaj Nowy Produkt</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="name">Nazwa</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Wprowadź nazwę produktu"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Cena</label>
          <input
            id="price"
            type="number"
            name="price"
            value={formData.price}
            placeholder="Wprowadź cenę produktu"
            step="0.01"
            min="0"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Ocena</label>
          <input
            id="rating"
            type="number"
            name="rating"
            value={formData.rating}
            placeholder="Wprowadź ocenę produktu (0-5)"
            step="0.1"
            min="0"
            max="5"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Adres URL Obrazu</label>
          <input
            id="image"
            type="text"
            name="image"
            value={formData.image}
            placeholder="Wprowadź adres URL obrazu"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-button">
          Dodaj Produkt
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
