//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBqgMVBMwvAcdloB1ZyzwU928qwFR8-uz8",
    authDomain: "kwitter-98d96.firebaseapp.com",
    databaseURL: "https://kwitter-98d96-default-rtdb.firebaseio.com",
    projectId: "kwitter-98d96",
    storageBucket: "kwitter-98d96.appspot.com",
    messagingSenderId: "628031554278",
    appId: "1:628031554278:web:b23999574dd1c5ddd2b127",
    measurementId: "G-2HZ9R9DL59"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
function send() {
    message= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0

    });
document.getElementById("msg").value="";
}
//End code
    } });  }); }
getData();
