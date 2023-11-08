import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);