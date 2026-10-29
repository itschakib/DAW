
let lista = document.getElementById("lista");

let inicio = document.getElementById("inicio");
let final = document.getElementById("final");
let eliminarUltima = document.getElementById("eliminarUltima");
let eliminarPrimera = document.getElementById("eliminarPrimera");


inicio.onclick = function () {

    let tarea = prompt("Introduce una tarea");
//comprobamos q no se intrega un texto vacio o null 
    if (tarea != null && tarea != "") {

        let elemento = document.createElement("li");

        elemento.innerHTML = tarea;
//insertamos las tareas al principio de la lista 
        lista.insertBefore(elemento, lista.firstElementChild);
    }
};


final.onclick = function () {

    let tarea = prompt("Introduce una tarea");

    if (tarea != null && tarea != "") {
//comprobamos q no se intrega un texto vacio o null 
        let elemento = document.createElement("li");

        elemento.innerHTML = tarea;
//insertamos las tareas aqui normal
        lista.appendChild(elemento);
    }
};


eliminarUltima.onclick = function () {
//comprobamos q la lista no esta vacia 
// (children es como child solo en plural)
    if (lista.children.length == 0) {

        console.log("La lista esta vacia");

    } else {

        lista.removeChild(lista.lastElementChild);

    }
};


eliminarPrimera.onclick = function () {
//comprobamos q la lista no esta vacia 
    if (lista.children.length == 0) {

        console.log("La lista eesta vacia");

    } else {

        lista.removeChild(lista.firstElementChild);

    }
};
