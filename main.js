function addUser(){
user_name=document.getElementById("user_name").value;

localStorage.setItem("user_name", user_name);
window.location="hola.html";
}
function jijiji(){
localStorage.removeItem("user_name");

}