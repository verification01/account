function access(){
const inpt = document.getElementById("holo-input").value;
if (inpt === "saad"){
window.location.href = "saadac.html";
}
else if(inpt === "santo"){
window.location.href = "santoac.html";
}
else{
alert("Access Denied! User not found.")
}
}
