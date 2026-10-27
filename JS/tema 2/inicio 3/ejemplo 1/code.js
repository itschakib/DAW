/* APARTADO A: CREAR */

// 1. Crear el elemento
let delos = document.createElement("p");

// 2. Añadir el atributo id
delos.setAttribute("id", "Edufisica");

// 3. Crear el texto y añadirlo al párrafo
let texto = document.createTextNode("hoy es un dia de EF");
delos.appendChild(texto);

/* APARTADO B: INSERTAR NODOS */

// Seleccionar el div pati
let bb = document.getElementById("pati");

// 4. Añadir el párrafo antes del div pati
document.body.insertBefore(delos, bb);

// Si quieres añadirlo DENTRO de pati,
// utiliza esta línea en lugar de insertBefore:
// bb.appendChild(delos);

// APARTADO C: PROPIEDADES DE LOS NODOS

// 1. Obtener el primer nodo hijo de pati
console.log(bb.firstChild);

// 2. Obtener el padre del párrafo delos
console.log(delos.parentNode);

/* APARTADO D: SELECCIONAR ELEMENTOS <a> */

// 1. Seleccionar el div pati
let bb = document.getElementById("pati");

// 2. Seleccionar todos los enlaces <a> dentro de pati
let enlaces = bb.querySelectorAll("a");

// 3. Mostrar todos los enlaces
console.log(enlaces);

// APARTADO D.1: ACCEDER A CADA ENLACE

// 1. Obtener el primer enlace
console.log(enlaces[0]);

// 2. Obtener el segundo enlace
console.log(enlaces[1]);

/* APARTADO D.2: BORRAR DELOS */

// 1. Seleccionar el párrafo
let delos = document.getElementById("Edufisica");

// 2. Obtener su padre
let papixulo = delos.parentNode;

// 3. Eliminar delos desde su padre
papixulo.removeChild(delos);

/* APARTADO E: REEMPLAZAR UN NODO */

// 1. Seleccionar el nodo que queremos reemplazar
let delos = bb.querySelector("#Edufisica");

// 2. Obtener el padre del nodo
let papixulo = delos.parentNode;

// 3. Crear el nuevo elemento
let nuevo = document.createElement("article");

// 4. Añadir texto al nuevo elemento
nuevo.textContent = "Nuevo artículo";

// 5. Reemplazar el nodo antiguo por el nuevo
papixulo.replaceChild(nuevo, delos);
