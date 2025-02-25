import React, { useState } from "react";
import { auth } from "../data/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Zalogowano pomyślnie!");
      window.location.href = "/"; // Przekierowanie po zalogowaniu
    } catch (err) {
      setError("Nieprawidłowy email lub hasło");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Wprowadź email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Hasło</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Wprowadź hasło"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Oscylujący przycisk Zaloguj */}
        <button type="submit" className="login-button">
          Zaloguj
        </button>

        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
