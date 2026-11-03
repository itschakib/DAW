window.onload = function () {
  let tabla = document.getElementById("tabla");

  //button  1 medidas
  let boton1 = document.getElementById("medidas");

  boton1.onclick = function () {
    alert(
      "las medidas de la tabla son : Altura " +
        tabla.getAttribute("height") +
        "\nAnchura " +
        tabla.getAttribute("width"),
    );
    let anchura = prompt("introduce la nueva anchura");
    let altura = prompt("introduce la nueva altura");
    tabla.width = anchura;
    tabla.height = altura;
  };

  //button2 borde
  let boton2 = document.getElementById("borde");
  boton2.onclick = function () {
    alert("el border  de la tabla es " + tabla.getAttribute("border"));
    let border0 = prompt("dame la nueva valor del border");

    tabla.border = border0;
  };

  //boton 3 alineacion
  let boton3 = document.getElementById("alineacion");
  boton3.onclick = function () {
    if (tabla.align == "center") {
      tabla.align = "right";
    } else if (tabla.align == "right") {
      tabla.align = "left";
    } else {
      tabla.align = "center";
    }
  };
};
