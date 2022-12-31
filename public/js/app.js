// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAN4nIg7qFHO-jhdRZnA8JDO8vr_du5-pA",
  authDomain: "akad-nikah-ce8b6.firebaseapp.com",
  projectId: "akad-nikah-ce8b6",
  storageBucket: "akad-nikah-ce8b6.appspot.com",
  messagingSenderId: "662346815427",
  appId: "1:662346815427:web:052c5ad25c7c56b606cf76",
  measurementId: "G-Q4LN5P56SC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

function writeGuestData(name, greet, confirmation) {
  const todayDate = new Date().toISOString();

  set(ref(db, 'guest/' + todayDate), {
    name: name,
    greet: greet,
    confirmation : confirmation
  });
}