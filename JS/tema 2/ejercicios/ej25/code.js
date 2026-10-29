
let capa = document.getElementById("capa");
let fotoGrande = document.getElementById("fotoGrande");

// cojemos todas las fotos del pagina 
let fotos = document.querySelectorAll("img");

//  recorremos todas las imagenes
for (let i = 0; i < fotos.length; i++) {

    // No añiadimos el foto al imagen amplicada 
    if (fotos[i].id != "fotoGrande") {

        // cuando hacemos el click a imagen que queremos
        fotos[i].onclick = function () {

            // copiamos la imagen pulsada
            fotoGrande.src = this.src;

            // y monstramos la capa
            capa.style.display = "flex";

           
        };
    }
}

// cuando hacemos click en la capa para que se ocura
capa.onclick = function () {

    capa.style.display = "none";

    // y quitamos la imagen ampliada para q vuelve normal
    fotoGrande.src = "";
};
