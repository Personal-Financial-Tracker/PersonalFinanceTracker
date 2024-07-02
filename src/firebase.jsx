// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo3TiTTCEgdk34kKoqv4eWB0K-dK4CLwM",
  authDomain: "financely-b0d83.firebaseapp.com",
  projectId: "financely-b0d83",
  storageBucket: "financely-b0d83.appspot.com",
  messagingSenderId: "383671515685",
  appId: "1:383671515685:web:dd5c94ae1a2876672f1dcc",
  measurementId: "G-EK738N9D0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };