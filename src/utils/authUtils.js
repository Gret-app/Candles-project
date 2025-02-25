import { db } from "../data/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const getUserRole = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    return userDoc.exists() ? userDoc.data().role : "user";
  } catch (error) {
    console.error("Błąd pobierania roli użytkownika:", error);
    return "user";
  }
};
