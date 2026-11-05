/*
//Apartado A

let ladoizq = document.getElementById("ladoIzq");
let ladoder = document.getElementById("ladoDer");
let salida = document.getElementById("salida");

let accion = document.querySelectorAll("input");

let genera = accion[0];
let compara = accion[1];

// genera
genera.onclick = function () {
  let num1 = Math.round((Math.random() * 50) + 1);
  let num2 = Math.round((Math.random() * 50) + 1);

  ladoizq.textContent = num1;
  ladoder.textContent = num2;

  // limpiamos el div
  salida.textContent = "";

  genera.disabled = true;
  compara.disabled = false;
};
//compara
compara.onclick = function () {
  let num1 = parseInt(ladoizq.textContent);
  let num2 = parseInt(ladoder.textContent);

  // comparasion cual es el mayor
  if (num1 > num2) {
    salida.textContent = num1;
    ladoizq.textContent = "";
  } else {
    salida.textContent = num2;
    ladoder.textContent = "";
  }

  genera.disabled = false;
  compara.disabled = true;
};
*/

// Apartado B

let ladoizq = document.getElementById("ladoIzq");
let ladoder = document.getElementById("ladoDer");
let salida = document.getElementById("salida");

let accion = document.querySelectorAll("input");

let genera = accion[0];
let compara = accion[1];

    let intervalo;

    genera.onclick = function() {

        // generamos numeros cada seg
        intervalo = setInterval(function() {

            let num1 = Math.round((Math.random() * 50) + 1);
            let num2 = Math.round((Math.random() * 50) + 1);

            ladoizq.textContent = num1;
            ladoder.textContent = num2;

        }, 1000);

        salida.textContent = "";

      genera.disabled = true;
      compara.disabled = false;
    }
    compara.onclick = function() {

        clearInterval(intervalo);

        let num1 = parseInt(ladoizq.textContent);
        let num2 = parseInt(ladoder.textContent);

        if (num1 > num2) {
            salida.textContent = num1;
            ladoizq.textContent = "";
        } else {
            salida.textContent = num2;
            ladoder.textContent = "";
        }

        genera.disabled = false;
        compara.disabled = true;
    };

