// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUEmZKRH1MWRtLi5pqZ1rc0Kr2Oc_AslU",
    authDomain: "react-project-new-478e4.firebaseapp.com",
    projectId: "react-project-new-478e4",
    storageBucket: "react-project-new-478e4.firebasestorage.app",
    messagingSenderId: "609827109128",
    appId: "1:609827109128:web:84b9885428a405ef7a94bd",
    measurementId: "G-1J0WNC68FT",
    databaseURL: "https://react-project-new-478e4-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);