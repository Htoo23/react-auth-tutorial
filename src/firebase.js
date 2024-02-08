
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB9A1aREy4fGZxFqHWe1u2rpGTMK7SJpUQ",
  authDomain: "react-auth-tutorial-12a44.firebaseapp.com",
  projectId: "react-auth-tutorial-12a44",
  storageBucket: "react-auth-tutorial-12a44.appspot.com",
  messagingSenderId: "982000206619",
  appId: "1:982000206619:web:7b20e85b68a551fec049be"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);