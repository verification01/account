// js/firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔹 Firebase Config - তোমার project অনুযায়ী update করো
const firebaseConfig = {
  apiKey: "AIzaSyDjEgk5EHgQD5HQJxEvHOzFwVyr9ZLEZBY",
  authDomain: "verifyprojectss.firebaseapp.com",
  projectId: "verifyprojectss",
  appId: "1:979191477358:web:2f5176ea9174579118a27f"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
