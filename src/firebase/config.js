// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClK4tBv4bq-cYNN249b4tg035lqD2XKtQ",
  authDomain: "ecommercejec.firebaseapp.com",
  projectId: "ecommercejec",
  storageBucket: "ecommercejec.appspot.com",
  messagingSenderId: "929162862027",
  appId: "1:929162862027:web:3ac1689a06e758676dea4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);