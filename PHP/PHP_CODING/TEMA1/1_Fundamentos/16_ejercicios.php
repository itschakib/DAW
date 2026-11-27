<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ol>
        <li>Crea una función que muestre "Hola {tu nombre}" usando una variable definida desde
            fuera de la función recogiendo dicha función a través de un parámetro.
            En caso de llamar a la función sin parámetro, el valor por defecto será "Paquito"</li>

        <?php
        $nombre = "chakib";
        function saluda($nombre = "Paquito")
        {
            echo "hola " . $nombre . "<br>";
        }

        saluda($nombre);
        saluda();
        ?>

        <li>Crea una función llamada operaciones que, dada dos variables, sacar por pantalla la suma,
            resta, división, módulo y multiplicación de las dos variables.
            (no hace falta tener en cuenta la división por cero)</li>
        <?php
        function operaciones($a, $b)
        {
            $suma = $a + $b;
            $resta = $a - $b;
            $multiplicacion = $a * $b;
            $division = $a / $b;
            $modulo = $a % $b;

            echo "Suma: " . $suma . "<br>";
            echo "Resta: " . $resta . "<br>";
            echo "Multiplicación: " . $multiplicacion . "<br>";
            echo "División: " . $division . "<br>";
            echo "Módulo: " . $modulo . "<br>";
        }

        operaciones(5, 2);

        ?>

        <li>Haz uso de los operandos "^" y "**" para dos variables numéricas (2 y 10 po ejemplo).
            Dada la solución, deduce (sin chatgpt) qué hace cada operando</li>


        <?php

        $a = 2;
        $b = 10;

        // Operación con ^
        $resultado1 = $a ^ $b;
        echo $resultado1 . "<br>";

        // Operación con **
        $resultado2 = $a ** $b;
        echo $resultado2;
        ?>



    </ol>
</body>

</html>