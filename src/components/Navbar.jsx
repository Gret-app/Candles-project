import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { auth } from "../data/firebaseConfig";
import { getUserRole } from "../utils/authUtils";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sprawdzenie, czy użytkownik jest zalogowany i jaka jest jego rola
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true); // Użytkownik jest zalogowany
        const role = await getUserRole(user.uid); // Pobierz rolę użytkownika z Firestore
        if (role === "admin") {
          setIsAdmin(true); // Jeśli rola to admin, ustaw isAdmin na true
        } else {
          setIsAdmin(false); // Jeśli nie admin, isAdmin = false
        }
      } else {
        setIsLoggedIn(false); // Użytkownik jest wylogowany
        setIsAdmin(false);
      }
    });

    return () => unsubscribe(); // Czyszczenie observera
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Funkcja wylogowania użytkownika
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Wylogowano pomyślnie!");
      window.location.href = "/login"; // Przekierowanie na stronę logowania po wylogowaniu
    } catch (error) {
      console.error("Błąd podczas wylogowania:", error);
    }
  };

  return (
    <div className="navbar">
      {/* Logo i tytuł */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="site-title">Pure Aura</h1>
      </div>

      {/* Hamburger menu */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Linki nawigacyjne */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Strona główna
        </NavLink>
        <NavLink to="/bestsellery" onClick={closeMenu}>
          Bestsellery
        </NavLink>
        <NavLink to="/oferta" onClick={closeMenu}>
          Oferta
        </NavLink>
        {/* Link dostępny tylko dla admina */}
        {isAdmin && (
          <NavLink to="/dodaj" onClick={closeMenu}>
            Dodaj produkt
          </NavLink>
        )}
      </div>

      {/* Social media i przyciski logowania/wylogowania */}
      <div className="social-media">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>

        {/* Przycisk logowania/wylogowania obok social media */}
        {isLoggedIn ? (
          <button onClick={handleLogout} className="auth-button">
            Wyloguj
          </button>
        ) : (
          <NavLink to="/login" className="auth-button">
            Zaloguj
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navbar;
