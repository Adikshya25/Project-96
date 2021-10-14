
//ADD YOUR FIREBASE LINKS HERE
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

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name +" !";

function addRoom() {
room_name= document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose: "addingRoomName"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot)
{childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name- "+ Room_names);
    row= "<div class='room_name' id = "+ Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + " </div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });
    });
    }
getData();
function redirectToRoomName(name){ 
    console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    
}
