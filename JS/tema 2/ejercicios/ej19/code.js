
window.onload = function () {

    let lista = document.querySelector("ul");
    let boton = document.querySelector("button");

    boton.onclick = function () {

        let texto = prompt("Introduce un texto:");

        if (texto != null) {
            let elemento = document.createElement("li");
            let contenido = document.createTextNode(texto);

            elemento.appendChild(contenido);
            lista.appendChild(elemento);
        }
    };

};
