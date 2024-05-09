// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQqZG5KX71TelXcm_-PmPL7O8_qTYYj_Q",
  authDomain: "heaven-house-2.firebaseapp.com",
  projectId: "heaven-house-2",
  storageBucket: "heaven-house-2.appspot.com",
  messagingSenderId: "81160091160",
  appId: "1:81160091160:web:fe6fca14d66c52258c356d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
