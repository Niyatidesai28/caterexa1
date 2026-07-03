import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBc0OOckceraY5seVfWj_AvVDB5v8pLfw",
  authDomain: "caterexa1.firebaseapp.com",
  projectId: "caterexa1",
  storageBucket: "caterexa1.firebasestorage.app",
  messagingSenderId: "103875635647",
  appId: "1:103875635647:web:fb22272a5e02e9e5f6190a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);