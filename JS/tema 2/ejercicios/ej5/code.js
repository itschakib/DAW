window.onload = function (p) {
  let parrafo = document.getElementById("parrafo");

  parrafo.onclick = function () {
    if (parrafo.getAttribute("class") == "uno") {
      parrafo.setAttribute("class", "dos");
    } else {
      parrafo.setAttribute("class", "uno");
    }
  };
};
