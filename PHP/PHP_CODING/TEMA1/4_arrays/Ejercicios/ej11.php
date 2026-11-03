<h3>Cesta de la compra</h3>

<?php

$productos = [
    ["Manzanas", 1.50, "Alimentación"],
    ["Leche", 0.90, "Alimentación"],
    ["Pan", 1.20, "Alimentación"],
    ["Cerveza", 2.50, "Bebidas"],
    ["Refresco", 1.80, "Bebidas"],
    ["Ratón inalámbrico", 25.00, "Electrónica"]
];

?>
<form method="POST">

    <?php
    foreach ($productos as $i => $producto) {
        echo $producto[0] . " (" . $producto[1] . "€) ";

        echo "<input type='number' name='cantidad[$i]' min='0' value='0'><br>";
    }
    ?>

    <br>
    <input type="submit" value="Calcular compra">

</form>

<form method="POST">

    <?php
    foreach ($productos as $i => $producto) {
        echo $producto[0] . " (" . $producto[1] . "€): ";
        echo "<input type='number' name='cantidad[$i]' min='0' value='0'><br><br>";
    }
    ?>

    <input type="submit" value="Calcular compra">

</form>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $subtotal = 0;
    $descuentos = 0;
    $baseImponible = 0;
    $ivaTotal = 0;

    echo "<h3>Ticket de compra</h3>";

    echo "<table border='1'>";
    echo "<tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Descuento</th>
            <th>IVA</th>
          </tr>";