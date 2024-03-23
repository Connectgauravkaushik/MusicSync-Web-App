// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_firebase_api,
  authDomain: "music-app-e9e04.firebaseapp.com",
  projectId: "music-app-e9e04",
  storageBucket: "music-app-e9e04.appspot.com",
  messagingSenderId: "937731228768",
  appId: "1:937731228768:web:d01f42a4cae5a7d5af6f05",
  measurementId: "G-9F13X9S5MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();


