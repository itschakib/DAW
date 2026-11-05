let boton = document.querySelector("input");
let solucion = document.querySelector(".solucion");

boton.onclick = function () {
  let filas;
  let columnas;

  // los numeros del filas
  do {
    filas = parseInt(prompt(" por filas de tabla : dame un numero entre 1 y 10"));
  } while (filas < 1 || filas > 10);

  // los numeros de columnas
  do {
    columnas = parseInt(prompt(" por columnas de tabla : dame un numero entre 1 y 10"));
  } while (columnas < 1 || columnas > 10);

//creamos tablas
  let tabla = document.createElement("table");
  tabla.className = "tabla";

  for (let i = 1; i <= filas; i++) {
    let fila = document.createElement("tr");

    for (let j = 1; j <= columnas; j++) {
      let celda = document.createElement("td");
      celda.textContent = i;

      fila.appendChild(celda);
    }

    tabla.appendChild(fila);
  }

// esto por añadir tablas sin borrar las otras
  solucion.appendChild(tabla);
};
