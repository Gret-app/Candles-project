import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import stylu
import logo from "../assets/logo.png"; // Ścieżka do logo

function Navbar() {
  return (
    <div className="navbar">
      {/* Linki nawigacyjne */}
      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Strona główna
        </NavLink>
        <NavLink
          to="/bestsellery"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Bestsellery
        </NavLink>
        <NavLink
          to="/oferta"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Oferta
        </NavLink>
        <NavLink
          to="/dodaj"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Dodaj produkt
        </NavLink>
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
