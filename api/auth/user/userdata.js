import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
import { getStorage, uploadBytesResumable, getDownloadURL, ref as sRef } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";

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

export function CreateUser(email) {
    var EmailUser = email.split('@')[0];
    const db = getDatabase();
    const CurrentUserID = GenerateID(16);
    SetCookie("userid", CurrentUserID)

    set(ref(db, 'users/' + UserNameFromEmail(email)), {
      username: EmailUser,
      userid: CurrentUserID,
      email: email,
      profile_picture : "null"
    });

    set(ref(db, 'users/index/' + EmailUser), {
        userid: CurrentUserID
    });
}

export function GenerateID(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export function UserOnlineStatus(userid, status) {
    const db = getDatabase();
    set(ref(db, 'users/' + userid), {
        isOnline: status
    });


}

export function UserStatusByEmail(InputEmail, status) {
    var UseredEmail = UserNameFromEmail(InputEmail);
    const db = getDatabase();
    const IndexDB = ref(db, 'users/index/' + UseredEmail);
    onValue(IndexDB, (snapshot) => {
        const data = snapshot.val();
        UserOnlineStatus(data, status);
    });
}

export function CreateUserToken(email, password) {
    const db = getDatabase();
    const EncryptionKey = GenerateID(32);

    set(ref(db, 'users/token/' + UserNameFromEmail(email)), {
        token: EncryptionKey
    });

    var EmailCookieToken = email;
    var PasswordCookieToken = EncodeToken(CryptoJS.AES.encrypt(password, EncryptionKey));
    SetCookie("email", EmailCookieToken);
    SetCookie("password", PasswordCookieToken);
}

export function GetUserByEmail(InputEmail) {
    var EmailVar = UserNameFromEmail(InputEmail);
    const db = getDatabase();
    const userIDRef = ref(db, 'users/' + 'index/' + InputEmail.split('@')[0] + '/userid');
    onValue(userIDRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        return data;
});
}

export function RetrieveUserToken(email) {
    if (CheckCookie("email") == 0) {
        return null
    } else {

        const db = getDatabase();
        const IndexDB = ref(db, 'users/token/' + GetUserByEmail(email));
        onValue(IndexDB, (snapshot) => {
            const ReturnedKey = snapshot.val();
            var DecryptedEmail = GetCookie("email");
            var DecryptedPassword = DecodeToken(CryptoJS.AES.decrypt(GetCookie("password"), ReturnedKey));
            return DecryptedEmail + "&" + DecryptedPassword;
        });
    }
}

export function SetCookie(name, value) {
    localStorage.setItem(name, value);
}

export function GetCookie(name) {
    return localStorage.getItem(name).toString();
}

export function checkCookie(InputCookie) {
    if (localStorage.getItem(InputCookie) != null) {
        return 1;
    } else {
        return 0;
    }
}

export function EmailFromUserName(user_name) {
    return user_name + "@gmail.com";
}

export function UserNameFromEmail(email) {
        return email.split('@')[0]
}


export function EncodeToken(DecodedToken) {
    return DecodedToken.toString().replace('+','xMl3Jk').replace('/','Por21Ld').replace('=','Ml32');
}

export function DecodeToken(EncodedToken) {
    return EncodedToken.toString().replace('xMl3Jk', '+' ).replace('Por21Ld', '/').replace('Ml32', '=');
}

export function IsLoggedIn() {
    if ($firebaseAuth().$getAuth() != null) {
        return $firebaseAuth().$getAuth();
    } else {
        return "0";
    }
}

export function UserProfileOnHomePage() {
    if (IsLoggedIn() != false) {
        // Show User Pic And Name
    } else {
        // Show Default Pic
    }
}

window.UploadAvatar = function() {
    const storage = getStorage();
    const storageRef = sRef(storage, "user/" + localStorage.getItem("email").split('@')[0] + "/avatar.png");

    const uploadTask = uploadBytesResumable(storageRef, document.getElementById("avatar-upload").files[0]);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
        (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(sRef(storage, "user/" + localStorage.getItem("email").split('@')[0] + "/avatar.png"))
    .then((url) => {
        console.log(url);
        UpdateAvatarURL(url);
    })
  }
);
}

export function UpdateAvatarURL(AvtURL) {
    const db = getDatabase();

    set(ref(db, 'users/' + UserNameFromEmail(localStorage.getItem("email")) + '/'), {
        avatar: AvtURL
    });
}