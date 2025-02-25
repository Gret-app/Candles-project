import React, { useState, useEffect } from "react";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../data/firebaseConfig";
import { getUserRole } from "../utils/authUtils";

const AddProduct = ({ addCandle }) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // Dodane, aby kontrolować stan ładowania

  // Sprawdzenie roli użytkownika po załadowaniu komponentu
  useEffect(() => {
    const checkUserRole = async () => {
      const user = auth.currentUser;

      if (!user) {
        navigate("/login"); // Jeśli użytkownik nie jest zalogowany, przekieruj do logowania
      } else {
        const role = await getUserRole(user.uid);
        if (role === "admin") {
          setIsAdmin(true);
        } else {
          navigate("/"); // Jeśli użytkownik to nie admin, przekieruj na stronę główną
        }
      }
      setLoading(false);
    };

    checkUserRole();
  }, [navigate]);

  // Stan formularza
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

  // Ekran ładowania podczas sprawdzania roli
  if (loading) return <p>Ładowanie...</p>;

  // Jeśli użytkownik to admin, renderujemy formularz
  if (isAdmin) {
    return (
      <div className="add-product">
        <h2>Dodaj nowy produkt</h2>
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
            Dodaj
          </button>
        </form>
      </div>
    );
  }

  // Jeśli użytkownik to nie admin (na wypadek, gdyby `useEffect` nie zadziałał)
  return <p>Brak dostępu do tej strony.</p>;
};

export default AddProduct;
