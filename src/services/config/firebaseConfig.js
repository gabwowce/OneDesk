// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0dYu231hVVOb2NOwAuZLrBHNmEAZVs3U",
  authDomain: "onedesk-bf980.firebaseapp.com",
  projectId: "onedesk-bf980",
  storageBucket: "onedesk-bf980.firebasestorage.app",
  messagingSenderId: "4983480860",
  appId: "1:4983480860:web:5433c41e7d97932a3e75d9",
  measurementId: "G-1WKG96EDCE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
