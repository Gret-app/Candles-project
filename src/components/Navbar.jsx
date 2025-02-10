import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
        <NavLink to="/dodaj" onClick={closeMenu}>
          Dodaj produkt
        </NavLink>
      </div>

      {/* Social media */}
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
