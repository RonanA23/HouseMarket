// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR1nwEQfvGrmtHMl6TfFa46DaH3GFlv9c",
  authDomain: "housemarket-84c03.firebaseapp.com",
  projectId: "housemarket-84c03",
  storageBucket: "housemarket-84c03.appspot.com",
  messagingSenderId: "17936614060",
  appId: "1:17936614060:web:38496a89a61a9ae60ad509"
};

// Initialize Firebase
export const app=initializeApp(firebaseConfig);
export const db= getFirestore()