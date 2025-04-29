// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxwdEsSsNnGYiXrdl6SZXUTjbDw0iEgog",
  authDomain: "webflix-9249b.firebaseapp.com",
  projectId: "webflix-9249b",
  storageBucket: "webflix-9249b.appspot.com",
  messagingSenderId: "686732790640",
  appId: "1:686732790640:web:020de66ee68d2da520ddb5",
  measurementId: "G-9HJJJ17TME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
console.log("Firebase Config:", firebaseConfig);
