//manejos de eventos
let abuelo = document.querySelector("section");
let padre = document.querySelector("div");
let hijo = document.querySelector("p");

// abuelo.onclick=function(){
//     alert("soy el  abuelo");
// }


// padre.onclick=function(){
//     alert("soy el padre");
// }

// hijo.onclick=function(){
//     alert("soy el hijo");

// padre.onclick=function(){
//     alert("soy el padre del señor delos");
// }
// }
//Orden:primero todos los captura y uego todos de burbuja

document.body.addEventListener("click", function () {
  alert("soy vuestro grande");
});
abuelo.addEventListener("click", function () {
  alert("soy el yayo");
});
padre.addEventListener("click", function () {
  alert("soy el papa");
});
hijo.addEventListener("click", function () {
  alert("soy el jonan");
});
padre.addEventListener("click", function () {
  alert("soy el papa del payo delos");
});