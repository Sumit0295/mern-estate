// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-web-4ce96.firebaseapp.com",
  projectId: "estate-web-4ce96",
  storageBucket: "estate-web-4ce96.appspot.com",
  messagingSenderId: "935812898749",
  appId: "1:935812898749:web:4d9689613176af39bd7cd4"
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
