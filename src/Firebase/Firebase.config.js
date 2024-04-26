// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5gRzxENFppiEHJG6ZEtU8ET3dCuUp5Xs",
  authDomain: "heaven-house-44d2b.firebaseapp.com",
  projectId: "heaven-house-44d2b",
  storageBucket: "heaven-house-44d2b.appspot.com",
  messagingSenderId: "797720108704",
  appId: "1:797720108704:web:2c161bf87dd2d3eb1b33c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
