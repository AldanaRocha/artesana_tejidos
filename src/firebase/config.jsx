import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM8NXZTueQzukpINCKgwX7m7BLXVpbeUU",
  authDomain: "artesanaaa-react.firebaseapp.com",
  projectId: "artesanaaa-react",
  storageBucket: "artesanaaa-react.firebasestorage.app",
  messagingSenderId: "866381373949",
  appId: "1:866381373949:web:14f20672970e14edca7994",
};

const app = initializeApp(firebaseConfig);

// Base de datos Firestore
export const db = getFirestore(app);
export const auth = getAuth(app);
