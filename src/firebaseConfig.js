import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1uXacT6wXZdefLZsF8hG24g-bnjeBG-g",
    authDomain: "projeto-teste-106e4.firebaseapp.com",
    projectId: "projeto-teste-106e4",
    storageBucket: "projeto-teste-106e4.appspot.com",
    messagingSenderId: "342250042694",
    appId: "1:342250042694:web:9b3afbcecb286d82bca147"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };