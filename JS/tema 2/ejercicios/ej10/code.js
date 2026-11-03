let rojo = document.getElementById("red");
let azul = document.getElementById("blue");
let verde = document.getElementById("green");

rojo.style.width = "100px";
azul.style.width = "100px";
verde.style.width = "100px";

rojo.style.height = "100px";
azul.style.height = "100px";
verde.style.height = "100px";

rojo.style.backgroundColor = "red";
azul.style.backgroundColor = "blue";
verde.style.backgroundColor = "green";
rojo.onmouseover = function () {
  document.body.style.backgroundColor = "red";
};

azul.onmouseover = function () {
  document.body.style.backgroundColor = "blue";
};

verde.onmouseover = function () {
  document.body.style.backgroundColor = "green";
};

rojo.onmouseout = function () {
  document.body.style.backgroundColor = "white";
};

azul.onmouseout = function () {
  document.body.style.backgroundColor = "white";
};

verde.onmouseout = function () {
  document.body.style.backgroundColor = "white";
};
