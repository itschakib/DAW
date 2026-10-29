
window.onload = function () {

    let botones = document.querySelectorAll("button");
//los buttonoes
    let generar = botones[0];
    let borrarViejo = botones[1];
    let borrarNuevos = botones[2];
    let sustituir = botones[3];

    let parrafo = document.querySelector("p");

    // button generar
    generar.onclick = function () {

        let nuevo = document.createElement("p");

        nuevo.textContent = parrafo.textContent;
        nuevo.classList.add("nuevo");

        // añadios el nuevo parrafi
        parrafo.parentNode.appendChild(nuevo);

        // desbloqueamos el boton
        borrarNuevos.disabled = false;
    };

    // button borrar viejo
    borrarViejo.onclick = function () {

        if (parrafo != null) {
            parrafo.parentNode.removeChild(parrafo);
            parrafo = null;
        }

        // bloqueamos estos buttons
        borrarViejo.disabled = true;
        sustituir.disabled = true;
    };

    // button borrar nuevos
    borrarNuevos.onclick = function () {

        let nuevos = document.querySelectorAll(".nuevo");

        for (let i = 0; i < nuevos.length; i++) {
            nuevos[i].parentNode.removeChild(nuevos[i]);
        }

        // bloqueamos este button ya no quedan parrafos nuevos
        borrarNuevos.disabled = true;
    };

    // button sustituir
    sustituir.onclick = function () {

        if (parrafo != null) {

            let tabla = document.createElement("table");

            // primera fila
            let fila1 = document.createElement("tr");

            let celda1 = document.createElement("td");
            celda1.textContent = "1";

            let celda2 = document.createElement("td");
            celda2.textContent = "2";

            fila1.appendChild(celda1);
            fila1.appendChild(celda2);

            // segunda
            let fila2 = document.createElement("tr");

            let celda3 = document.createElement("td");
            celda3.textContent = "3";

            let celda4 = document.createElement("td");
            celda4.textContent = "4";

            fila2.appendChild(celda3);
            fila2.appendChild(celda4);

            // añadimos las filas a la tabla
            tabla.appendChild(fila1);
            tabla.appendChild(fila2);

            // subtitumis el parrafo por la tabla
            parrafo.parentNode.replaceChild(tabla, parrafo);

            parrafo = null;

            // ya no se puede borrar ni sustituir el parrafo inicial
            borrarViejo.disabled = true;
            sustituir.disabled = true;
        }
    };

};
