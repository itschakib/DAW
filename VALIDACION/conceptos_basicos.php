<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>1 . isset, empty,trim y htmlspecialchars</h1>
    <p>
        antes de vallidar un formulario hay q tener claras tres ideas: como saber si un dato existe o esta vacio
        como limpiar los espacios de los extremos y como mostrar en la pagina un texto q ha escrito
        el usuario sin q lo interprete como html
    </p>
    <?php
    $valor = "0";
    var_dump(isset($valor)); //true : pq la variable ya exist
    var_dump(empty($valor)); //true : cuidado sale verdadero pq es un valor recogido dentro de la lista de "valores vacios"   

    unset($valor);
    var_dump(isset($valor)); //
    var_dump(empty($valor)); //
    ?>

    <table>
        <tr>
            <th>valor$x</th>
            <th>isset ($x)</th>
            <th>empty ($x)</th>
        </tr>
        <?php
        $pruebita = [
            ["null", null, false],
            ['"" (cadena vacía)', "", false],
            ['"0" (cadena con un cero)', "0", true],
            ["0", 0, true],
            ["false", false, false],
            ["[] (array vacío)", [], false],
            ['" " (un espacio en blanco)', " ", true],
            ['"0.0"', "0.0", false],
            ['"hola"', "hola", false]
        ];
        ?>
    </table>
</body>

</html>