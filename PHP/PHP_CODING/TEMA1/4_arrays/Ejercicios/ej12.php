
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

    foreach ($productos as $i => $producto) {

        $nombre = $producto[0];
        $precio = $producto[1];
        $categoria = $producto[2];

        $cantidad = $_POST["cantidad"][$i];

        $totalProducto = $precio * $cantidad;

        // Descuento
        $descuento = 0;

        if ($cantidad >= 10) {
            $descuento = $totalProducto * 0.20;
        } elseif ($cantidad >= 5) {
            $descuento = $totalProducto * 0.10;
        }

        // Base imponible
        $baseProducto = $totalProducto - $descuento;

        // IVA según categoría
        if ($categoria == "Alimentación") {
            $iva = $baseProducto * 0.04;
        } elseif ($categoria == "Bebidas") {
            $iva = $baseProducto * 0.10;
        } else {
            $iva = $baseProducto * 0.21;
        }

        $subtotal = $subtotal + $totalProducto;
        $descuentos = $descuentos + $descuento;
        $baseImponible = $baseImponible + $baseProducto;
        $ivaTotal = $ivaTotal + $iva;

        echo "<tr>";
        echo "<td>$nombre</td>";
        echo "<td>$cantidad</td>";
        echo "<td>$precio €</td>";
        echo "<td>" . number_format($totalProducto, 2) . " €</td>";
        echo "<td>" . number_format($descuento, 2) . " €</td>";
        echo "<td>" . number_format($iva, 2) . " €</td>";
        echo "</tr>";
    }

    $total = $baseImponible + $ivaTotal;

    echo "</table>";

    echo "<p>Subtotal: " . number_format($subtotal, 2) . " €</p>";
    echo "<p>Descuentos: -" . number_format($descuentos, 2) . " €</p>";
    echo "<p>Base imponible: " . number_format($baseImponible, 2) . " €</p>";
    echo "<p>IVA total: " . number_format($ivaTotal, 2) . " €</p>";
    echo "<h3>Total a pagar: " . number_format($total, 2) . " €</h3>";

}

?>
