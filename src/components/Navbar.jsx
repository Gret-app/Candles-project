import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import stylu
import logo from "../assets/logo.png"; // Ścieżka do logo

function Navbar() {
  return (
    <div className="navbar">
      {/* Linki nawigacyjne */}
      <div className="nav-links">
        <Link to="/">Strona Główna</Link>
        <Link to="/bestsellery">Bestsellery</Link>
        <Link to="/oferta">Oferta</Link>
        <Link to="/dodaj">Dodaj Produkt</Link>
      </div>

      {/* Logo i tytuł */}
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo sklepu" className="logo" />
          <h1 className="site-title">Pure Aura</h1>
        </Link>
      </div>

      {/* Social Media */}
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
      </div>
    </div>
  );
}

export default Navbar;
