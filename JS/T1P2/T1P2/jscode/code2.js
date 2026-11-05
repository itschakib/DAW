let button = document.querySelectorAll("input");
let fotos = document.getElementById("contenedor");

let anadir = button[0];
let limpiar = button[1];
//anadir
anadir.onclick = function () {
  limpiar.disabled = false;
  let foto = prompt("dame el nombre del image");

  let elemento = document.createElement("img");

  if (foto == null) {
    foto = "terra.jpg";
  }

  elemento.src = "img/" + foto;

  elemento.className = "foto";

  fotos.appendChild(elemento);
};

//limpiar
limpiar.onclick = function () {
  // eliminamos los imagenes
  while (fotos.firstChild) {
    fotos.removeChild(fotos.firstChild);
  }

  limpiar.disabled = true;
};
