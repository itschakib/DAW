
window.onload = function () {

    let medidor = document.getElementById("medidor");
    let botonMeter = document.getElementById("botonMeter");

    let progreso = document.getElementById("progreso");
    let botonProgress = document.getElementById("botonProgress");

    let mensaje = document.getElementById("mensaje");
    let mensaje2 = document.getElementById("mensaje2");

    // METER
    botonMeter.onclick = function () {

        // Si está lleno, empezamos otra vez desde cero
        if (medidor.value >= 100) {
            medidor.value = 0;
        }

        botonMeter.disabled = true;
        mensaje.style.display = "none";

        let intervalo1 = setInterval(function () {

            medidor.value += 10;

            if (medidor.value >= 100) {
                clearInterval(intervalo1);

                mensaje.style.display = "block";
                botonMeter.disabled = false;
            }

        }, 500);
    };

    // PROGRESS
    botonProgress.onclick = function () {

        // Si está lleno, empezamos otra vez desde cero
        if (progreso.value >= 100) {
            progreso.value = 0;
        }

        botonProgress.disabled = true;
        mensaje2.style.display = "none";

        let intervalo2 = setInterval(function () {

            progreso.value += 10;

            if (progreso.value >= 100) {
                clearInterval(intervalo2);

                mensaje2.style.display = "block";
                botonProgress.disabled = false;
            }

        }, 500);
    };

};
