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
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
    import { CreateUser } from "/api/auth/user/userdata.js";
    window.SignUp = function () {
      const auth = getAuth();
      var email = document.getElementById('email').value
      var password = document.getElementById('password').value
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          CreateUser(email);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    window.SubmitCreds = function () {
      if (document.getElementById('password').length < 6) {
        console.log("Password ERROR, less than 6 chars.");
        document.getElementById('cred_guide').value = "Password must be longer than 6 characters.";
      }
      else {
        SignUp();
      }
    } 