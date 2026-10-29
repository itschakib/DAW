
window.onload = function () {

    let botones = document.querySelectorAll("button");

    let generar = botones[0];
    let borrarViejo = botones[1];
    let borrarNuevos = botones[2];
    let sustituir = botones[3];

    let parrafo = document.querySelector("p");

    // GENERAR
    generar.onclick = function () {

        let nuevo = document.createElement("p");

        nuevo.textContent = parrafo.textContent;
        nuevo.classList.add("nuevo");

        // Añadimos el nuevo párrafo al mismo padre
        parrafo.parentNode.appendChild(nuevo);

        // Desbloqueamos el botón
        borrarNuevos.disabled = false;
    };

    // BORRAR VIEJO
    borrarViejo.onclick = function () {

        if (parrafo != null) {
            parrafo.parentNode.removeChild(parrafo);
            parrafo = null;
        }

        // Bloqueamos estos dos botones
        borrarViejo.disabled = true;
        sustituir.disabled = true;
    };

    // BORRAR NUEVOS
    borrarNuevos.onclick = function () {

        let nuevos = document.querySelectorAll(".nuevo");

        for (let i = 0; i < nuevos.length; i++) {
            nuevos[i].parentNode.removeChild(nuevos[i]);
        }

        // Bloqueamos el botón si ya no quedan párrafos nuevos
        borrarNuevos.disabled = true;
    };

    // SUSTITUIR
    sustituir.onclick = function () {

        if (parrafo != null) {

            let tabla = document.createElement("table");

            // Primera fila
            let fila1 = document.createElement("tr");

            let celda1 = document.createElement("td");
            celda1.textContent = "1";

            let celda2 = document.createElement("td");
            celda2.textContent = "2";

            fila1.appendChild(celda1);
            fila1.appendChild(celda2);

            // Segunda fila
            let fila2 = document.createElement("tr");

            let celda3 = document.createElement("td");
            celda3.textContent = "3";

            let celda4 = document.createElement("td");
            celda4.textContent = "4";

            fila2.appendChild(celda3);
            fila2.appendChild(celda4);

            // Añadimos las filas a la tabla
            tabla.appendChild(fila1);
            tabla.appendChild(fila2);

            // Sustituimos el párrafo por la tabla
            parrafo.parentNode.replaceChild(tabla, parrafo);

            parrafo = null;

            // Ya no se puede borrar ni sustituir el párrafo inicial
            borrarViejo.disabled = true;
            sustituir.disabled = true;
        }
    };

};
