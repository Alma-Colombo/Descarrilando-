import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3R0Xry9JQJeNJCewhFmeJ2rB0oRbYFlo",
  authDomain: "descarrilando-f2032.firebaseapp.com",
  projectId: "descarrilando-f2032",
  storageBucket: "descarrilando-f2032.firebasestorage.app",
  messagingSenderId: "244120231450",
  appId: "1:244120231450:web:12edede50498c29d027ba3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
