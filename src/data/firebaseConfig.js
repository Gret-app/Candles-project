// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIeuflnToPKCpOuC4bXCRQQ6ydsojTeBk",
  authDomain: "soya-candles.firebaseapp.com",
  projectId: "soya-candles",
  storageBucket: "soya-candles.firebasestorage.app",
  messagingSenderId: "116335991199",
  appId: "1:116335991199:web:a25bc04538f6ef7db585aa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Autoryzacja użytkowników
export const db = getFirestore(app); // Baza danych Firestore
export default app; // 🔥 Ten eksport jest potrzebny, żeby działało `import app from "./data/firebaseConfig";`
