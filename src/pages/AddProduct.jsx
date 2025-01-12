import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = ({ addCandle }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    rating: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, price, rating, image } = formData;

    if (name && price && rating && image) {
      const newCandle = {
        id: Date.now(),
        name,
        price: parseFloat(price),
        rating: parseFloat(rating),
        image,
      };

      // Alert informujący o dodaniu produktu
      alert(`Produkt "${name}" został pomyślnie dodany do oferty!`);

      addCandle(newCandle);
      setFormData({
        name: "",
        price: "",
        rating: "",
        image: "",
      });
    } else {
      alert("Wszystkie pola muszą być wypełnione.");
    }
  };

  return (
    <div className="add-product">
      <h2>Dodaj Nowy Produkt</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="name">Nazwa:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Wprowadź nazwę produktu"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Cena:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Wprowadź cenę produktu"
            step="0.01"
            min="0"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Ocena:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Wprowadź ocenę produktu (0-5)"
            step="0.1"
            min="0"
            max="5"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Adres URL Obrazu:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Wprowadź URL obrazu produktu"
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
