// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVtujcyLkIu-gbRPgqGYbY0WKhsf2wif4",
  authDomain: "joysteem.firebaseapp.com",
  projectId: "joysteem",
  storageBucket: "joysteem.appspot.com",
  messagingSenderId: "642971632248",
  appId: "1:642971632248:web:a19a833718edc50875638d",
  measurementId: "G-G8Z1SNR0B2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();