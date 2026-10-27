/* APARTADO D.2: BORRAR TODOS LOS HIJOS DE SECTION */
window.onload = function () {
  let boton = document.querySelector("input[type='button']");

  botondelete.onclick = function () {
    let hijos = document.querySelector("sct").children;
    hijos.replaceChildren();

    let papi = hijos[0].parentNode;
    while (delos.firstChild != null) {
      delos.removeChild(delos.firstChild);
    }
  };
};
/*
botondelete.onclick = function () {
    let delos = document.getElementById("sct");
    delos.replaceChildren();

    mensaje.style.display = "block";
  };
};
*/

/* while (delos.firstChild != null) {
      delos.removeChild(delos.firstChild);
    }  
      */
