
let capa = document.getElementById("capa");
let fotoGrande = document.getElementById("fotoGrande");

let fotos = document.querySelectorAll("body > img");

let anterior = document.getElementById("anterior");
let siguiente = document.getElementById("siguiente");
let cerrar = document.getElementById("cerrar");

let posicion = 0;

// Recorremos todas las imágenes
for (let i = 0; i < fotos.length; i++) {

    fotos[i].onclick = function () {

        posicion = i;

        fotoGrande.src = this.src;

        capa.style.display = "flex";

    };

}

// Siguiente imagen
siguiente.onclick = function () {

    posicion++;

    if (posicion >= fotos.length) {
        posicion = 0;
    }

    fotoGrande.src = fotos[posicion].src;

};

// Imagen anterior
anterior.onclick = function () {

    posicion--;

    if (posicion < 0) {
        posicion = fotos.length - 1;
    }

    fotoGrande.src = fotos[posicion].src;

};

// Cerrar capa
cerrar.onclick = function () {

    capa.style.display = "none";

    fotoGrande.src = "";

};

// Cerrar al pulsar el fondo
capa.onclick = function () {

    capa.style.display = "none";

    fotoGrande.src = "";

};

// Evitar cerrar al pulsar los botones o la imagen
fotoGrande.onclick = function (event) {
    event.stopPropagation();
};

anterior.onclick = function (event) {
    event.stopPropagation();

    posicion--;

    if (posicion < 0) {
        posicion = fotos.length - 1;
    }

    fotoGrande.src = fotos[posicion].src;
};

siguiente.onclick = function (event) {
    event.stopPropagation();

    posicion++;

    if (posicion >= fotos.length) {
        posicion = 0;
    }

    fotoGrande.src = fotos[posicion].src;
};

cerrar.onclick = function (event) {
    event.stopPropagation();

    capa.style.display = "none";

    fotoGrande.src = "";
};
