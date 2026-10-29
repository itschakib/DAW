window.onload = function () {
  let enlaces = document.querySelectorAll("a");
  let mensaje = document.getElementById("mensaje");

  for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].onmouseover = function () {
      mensaje.style.display = "block";
     /* mensaje.innerHTML = "Esto es un enlace.";*/
    };
    enlaces[i].onmouseout = function () {
      mensaje.style.display = "none";
    };
    mensaje.innerHTML = "La URL de este enlace es: " + enlaces[i].href;
  }
};
