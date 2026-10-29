<?php
//print_r($_POST);
$empleados = [
    [1, "paquito", 900],
    [2, "sebas", 1800],
    [3, "lucas", 1000],
    [4, "maria", 4210],
    [5, "lucia", 2200],
    [6, "josefa", 9500],
    [7, "roberto", 1221],
    [8, "nic", 550],
    [9, "rafa", 420],
];
//echo "<pre>";print_r($_SERVER);echo "</pre>";

if ($_SERVER["REQUEST_METHODE"] == "POST") {

    if (isset($_POST["ejercicios"]) && $_POST["ejercicios"] == "ej5") {
        //para controlar que se escoja una opcion de la lista desplegable, voy a ver en el 
        // array post si exist la clave de la lista
        if (isset($_POST["columna"]) && isset($_POST["orden"])) {
            //array column
            //array multisort
            //mostrar en formato tabla html


            $columna = $_POST["columna"];
            $orden = $_POST["orden"];

            // Guardamos la columna elegida
            $datos = array_column($empleados, $columna);

            // Ordenamos
            array_multisort($datos, $orden, $empleados);

            // Mostramos la tabla
            echo "<table border='1'>";
            echo "<tr><th>ID</th><th>Nombre</th><th>Salario</th></tr>";

            foreach ($empleados as $empleado) {
                echo "<tr>";
                echo "<td>" . $empleado[0] . "</td>";
                echo "<td>" . $empleado[1] . "</td>";
                echo "<td>" . $empleado[2] . "</td>";
                echo "</tr>";
            }

            echo "</table>";
        } else {
            echo "<p style='color:red'>Selecciona cosas pordios</p>";
        }
    }
}
