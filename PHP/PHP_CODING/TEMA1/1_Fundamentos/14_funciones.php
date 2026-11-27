
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funciones en PHP</title>
</head>

<body>

    <h1>Funciones en PHP</h1>

    <?php

    /* Una función es un bloque de código reutilizable
       que realiza una tarea específica.
       Se declara utilizando la palabra function.
       Se ejecuta cuando la llamamos. */


    // 1. SIN PARÁMETROS Y SIN RETURN

    function saludar()
    {
        echo "Holis<br>";
    }

    saludar(); // Llamada a la función


    // 2. CON PARÁMETROS Y SIN RETURN

    // Los parámetros son las variables que recibe la función.

    function presentarse($nombre, $edad)
    {
        echo "Hola, mi nombre es $nombre y tengo $edad años<br>";
    }

    // Los argumentos son los valores que enviamos a la función.

    presentarse("Hugo", 39);

    // También podemos pasar variables como argumentos.

    $a = "Hugo";
    $b = 39;

    presentarse($a, $b);


    // 3. SIN PARÁMETROS Y CON RETURN

    // return devuelve un valor y finaliza la función.
    // No muestra directamente el resultado en pantalla.

    function saludar2()
    {
        return "Holis2<br>";
    }

    echo saludar2(); // Mostramos el valor devuelto


    // 4. PARÁMETRO CON UN VALOR POR DEFECTO

    // Si no pasamos un argumento,
    // se utiliza el valor por defecto.

    function darBienvenida($nombre = "NPC")
    {
        echo "Bienvenido/a, $nombre<br>";
    }

    darBienvenida("Paquito"); // Bienvenido/a, Paquito
    darBienvenida();          // Bienvenido/a, NPC


    // IMPORTANTE:
    // Primero van los parámetros obligatorios
    // y después los parámetros opcionales.


    // 5. CON PARÁMETROS Y CON RETURN

    function operar($a, $b)
    {
        return $a <= $b;
    }

    // La función devuelve un booleano.
    // 2 <= 4 es true.
    // echo muestra true como 1.

    echo operar(2, 4);

    ?>

</body>

</html>
