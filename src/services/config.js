import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";




const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "coder43255-d6ddd.firebaseapp.com",
    projectId: "coder43255-d6ddd",
    storageBucket: "coder43255-d6ddd.appspot.com",
    messagingSenderId: "207836203581",
    appId: "1:207836203581:web:b370f56df4761a05927854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)