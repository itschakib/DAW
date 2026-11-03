//FASE DE BURBUJA
document.onclick=function () {
    alert("soy body");
}
div.onclick=function() {
    alert("soy div")
}
parra.onclick=function(){
    alert("soy parrafo")
}
//FASE DE CAPTURA

document.getElementById("body").addEventListener("click", function() {
    alert("soy body");
}, true);

document.getElementById("div2").addEventListener("click", function() {
    alert("soy div");
}, true);

document.getElementById("parra2").addEventListener("click", function() {
    alert("soy parrafo");
}, true);