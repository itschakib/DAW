
let boton = document.getElementById("cambiar");

boton.onclick = function () {

    let imagen = document.getElementById("imagen");
    let texto = document.getElementById("texto");

    // Cambiamos la imagen
    imagen.src = "https://placehold.co/400x200?text=Playa";

    // Cambiamos el texto
    texto.innerHTML = "Esta es una imagen de una playa.";
};
