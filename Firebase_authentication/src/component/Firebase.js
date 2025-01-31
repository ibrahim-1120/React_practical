
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBUEmZKRH1MWRtLi5pqZ1rc0Kr2Oc_AslU",
    authDomain: "react-project-new-478e4.firebaseapp.com",
    databaseURL: "https://react-project-new-478e4-default-rtdb.firebaseio.com",
    projectId: "react-project-new-478e4",
    storageBucket: "react-project-new-478e4.firebasestorage.app",
    messagingSenderId: "609827109128",
    appId: "1:609827109128:web:84b9885428a405ef7a94bd",
    measurementId: "G-1J0WNC68FT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()