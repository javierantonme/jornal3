// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxggjxWl5cyFqd0poCLwJlw3o7g9D6Slw",
  authDomain: "react-cursos-10ba3.firebaseapp.com",
  projectId: "react-cursos-10ba3",
  storageBucket: "react-cursos-10ba3.appspot.com",
  messagingSenderId: "438473099983",
  appId: "1:438473099983:web:19fe01df931cd1b67b05ba"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const  FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )