window.onload = function () {
let enlace= document.querySelectorAll("a");
let button = document.querySelectorAll("button");
button[0].onclick = function(){
    alert("Has pulsado el botón y eso es el enlace que has pulsado es: "+enlace[0].href);
}
button[1].onclick = function(){
    alert("Has pulsado el botón segundo  y eso es el nuevo enlace que has pulsado es: "+enlace[1].href);
}

}