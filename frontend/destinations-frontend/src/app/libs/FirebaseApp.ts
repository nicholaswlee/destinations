// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFFxRpawj-i25JKv7s7fRMEx-73qsPzwo",
  authDomain: "destinations-2afdf.firebaseapp.com",
  projectId: "destinations-2afdf",
  storageBucket: "destinations-2afdf.appspot.com",
  messagingSenderId: "109227082948",
  appId: "1:109227082948:web:55087a7edb410d1a1ab591",
  measurementId: "G-C74GG6TM2J"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(FirebaseApp);
const firestore = getFirestore(FirebaseApp);
const auth = getAuth(FirebaseApp);
const provider = new GoogleAuthProvider();
export {storage, firestore, auth, FirebaseApp, provider};
