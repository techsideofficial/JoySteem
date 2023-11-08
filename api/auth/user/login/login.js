import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
    const firebaseConfig = {
      apiKey: "AIzaSyCVtujcyLkIu-gbRPgqGYbY0WKhsf2wif4",
      authDomain: "joysteem.firebaseapp.com",
      projectId: "joysteem",
      databaseURL: "https://joysteem-default-rtdb.firebaseio.com",
      storageBucket: "joysteem.appspot.com",
      messagingSenderId: "642971632248",
      appId: "1:642971632248:web:a19a833718edc50875638d",
      measurementId: "G-G8Z1SNR0B2"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
    import { CreateUser, UserStatusByEmail, CreateUserToken } from "https://joysteem.web.app/api/auth/user/userdata.js";
    const database = getDatabase();

    window.SignIn = function () {
        const auth = getAuth();
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                UserStatusByEmail(email, True);
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
        });
      CreateUserToken(email, password);
    }
    window.SubmitCreds = function () {
        SignIn();
      }
    