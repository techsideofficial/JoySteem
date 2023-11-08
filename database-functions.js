var firebaseConfig = {
  apiKey: "AIzaSyDptuxVr_jVIQGmagaSsIVbMvdwcBoTZ7Y",
  authDomain: "xen-relay.firebaseapp.com",
  databaseURL: "https://xen-relay-default-rtdb.firebaseio.com",
  projectId: "xen-relay",
  storageBucket: "xen-relay.appspot.com",
  messagingSenderId: "130867064497",
  appId: "1:130867064497:web:9b32684fb777626aa5fc90"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

window.addAnnounce = function(pubAnnounce) {
  var postListRef = firebase.database().ref('announcements');
  var newPostRef = postListRef.push();
  newPostRef.set({
    announcement: pubAnnounce
});

}

window.listAnnounce = function() {
  const listedData = [];
  var listCount = 0;
  firebase.database().ref('announcements').once('value', (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    echo(childData);
  });
});
}