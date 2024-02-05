// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9A1aREy4fGZxFqHWe1u2rpGTMK7SJpUQ",
  authDomain: "react-auth-tutorial-12a44.firebaseapp.com",
  projectId: "react-auth-tutorial-12a44",
  storageBucket: "react-auth-tutorial-12a44.appspot.com",
  messagingSenderId: "982000206619",
  appId: "1:982000206619:web:7b20e85b68a551fec049be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initalize Firebase Authentication and get a reference to the service
const auth=getAuth(app);