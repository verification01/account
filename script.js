function check(){
const usr = document.getElementById("user").value;
const paswrd = document.getElementById("password").value;
if(usr === "saad" && paswrd === "saad@saad"){
window.location.href = "access.html";
}
else if(usr === "santo" && paswrd === "santo5028"){
window.location.href = "access.html";
}
else{
alert("invalid user or password");
}
}
