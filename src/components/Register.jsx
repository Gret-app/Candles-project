import { useState } from "react";
import { auth, db } from "../data/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const registerUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Dodajemy użytkownika do Firestore i przypisujemy mu rolę "user"
      await setDoc(doc(db, "users", user.uid), {
        role: "user",
        email: user.email
      });

      alert("Rejestracja zakończona sukcesem!");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Rejestracja</h2>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Hasło"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={registerUser}>Zarejestruj</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
