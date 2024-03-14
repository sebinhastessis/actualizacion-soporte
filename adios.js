// Import the functions you need from the SDKs you need
var firebaseConfig={

    apiKey: "AIzaSyC3BAZr3EfQMivFivGPVdexVAeAVIT1i9E",
    authDomain: "skibiditoilet-e76b7.firebaseapp.com",
    databaseURL: "https://skibiditoilet-e76b7-default-rtdb.firebaseio.com",
    projectId: "skibiditoilet-e76b7",
    storageBucket: "skibiditoilet-e76b7.appspot.com",
    messagingSenderId: "959309347965",
    appId: "1:959309347965:web:0abbc488e49d5fe92d8514",
    measurementId: "G-6FWFD10WTS"
  };
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML=`Bienvenido a Dash, ${user_name}!`
function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "mas.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="index.html";
  }
  function jijiji(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_name");
    window.location="index.html"
  }