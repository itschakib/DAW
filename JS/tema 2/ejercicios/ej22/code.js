
alert("JavaScript funciona");

let boton = document.getElementById("boton");
let caja = document.getElementById("caja");
let contador = 1;

boton.onclick = function() {
    alert("Has pulsado el botón");

    let nuevo = document.createElement("p");
    let contenido = document.createTextNode("Párrafo número " + contador);

    nuevo.appendChild(contenido);
    caja.appendChild(nuevo);

    contador++;
};
