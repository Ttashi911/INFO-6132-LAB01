// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFOZzA4sa5ql4EYrsyUgzljl_pduVx7Xc",
  authDomain: "info-6132-lab02-d706d.firebaseapp.com",
  projectId: "info-6132-lab02-d706d",
  storageBucket: "info-6132-lab02-d706d.appspot.com",
  messagingSenderId: "688419361055",
  appId: "1:688419361055:web:98efeb751b91933177a02a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
