// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtXkIwdfEcjoSKC2lAPa4mlnQnrBTG7io",
  authDomain: "webreact-abdab.firebaseapp.com",
  databaseURL: "https://webreact-abdab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "webreact-abdab",
  storageBucket: "webreact-abdab.firebasestorage.app",
  messagingSenderId: "1089444406320",
  appId: "1:1089444406320:web:e388a42310e7d16b4f39f5",
  measurementId: "G-X9NE4SXQN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
export default database;