// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWIlkoPzlDeGAd0_gqZ85574qvNyoNYLQ",
  authDomain: "frog-dairy.firebaseapp.com",
  projectId: "frog-dairy",
  storageBucket: "frog-dairy.appspot.com",
  messagingSenderId: "624017035589",
  appId: "1:624017035589:web:ad7047aac66dbcb9ebee2c",
  measurementId: "G-SD1PZ6T1N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
