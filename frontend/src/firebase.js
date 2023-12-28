// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "real-estate-mern-ab5cb.firebaseapp.com",
  projectId: "real-estate-mern-ab5cb",
  storageBucket: "real-estate-mern-ab5cb.appspot.com",
  messagingSenderId: "223290526229",
  appId: "1:223290526229:web:183c29b7ad4e6431e11c1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);