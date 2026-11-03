<?php

$tramos = [
    [0, 12450, 0.19],
    [12451, 20200, 0.24],
    [20201, 35200, 0.30],
    [35201, 60000, 0.37],
    [60001, 300000, 0.45],
    [300001, INF, 0.471]

];

//CREAR UN FORMULARIO CON UN SOLO CAMPO NUMERICO => CUANDO se envie 
//el formulario aparecera un error si lo que ,e llega es un numero negativo o una cadena
//y si se envia un valor numerico positivo,aparecera una tabla debajo del formulario
//con una sola linea con las siguietnes columnas : BRUTO || NETO || Impuesto total ||Numero
//de tramos
?>

<form action="" method="post">
    <label>Salario bruto:</label>
    <input type="number" name="bruto" step="any">
    <input type="submit" value="Calcular">
</form>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (!isset($_POST["bruto"]) || !is_numeric($_POST["bruto"]) || $_POST["bruto"] <= 0) {

        echo "Error: necesitamos un numero positivo";

    } else {

        $bruto = $_POST["bruto"];
        $impuestos = 0;
        $numTramos = 0;

        foreach ($tramos as $tramo) {

            list($minimo, $maximo, $porcentaje) = $tramo;

            $base = 0;

            if ($bruto > $minimo) {

                if ($bruto < $maximo) {
                    $base = $bruto - $minimo;
                } else {
                    $base = $maximo - $minimo;
                }

            }

            if ($base > 0) {

                $impuestos += $base * $porcentaje;
                $numTramos++;

            }

        }

        $neto = $bruto - $impuestos;

?>

        <table border="1">

            <tr>
                <th>Bruto</th>
                <th>Neto</th>
                <th>Impuesto total</th>
                <th>Numero de tramos</th>
            </tr>

            <tr>
                <td><?= $bruto ?></td>
                <td><?= $neto ?></td>
                <td><?= $impuestos ?></td>
                <td><?= $numTramos ?></td>
            </tr>

        </table>

<?php

    }

}

?>
