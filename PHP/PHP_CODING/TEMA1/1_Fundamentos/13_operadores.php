<!-- PHP OPERATORS -->
<?php
$salto = "<br>";

$num1 = 14;
$num2 = 15;

//Operadores Aritmeticos

echo "Suma : " . ($num1 + $num2) . $salto;
echo "Resta : " . ($num1 - $num2) . $salto;
echo "Multiplicacion : " . ($num1 * $num2) . $salto;
echo "Division : " . ($num2 / $num1) . $salto;
echo "Resto : " . ($num2 % $num1) . $salto;

$salto;
$salto;
$salto;
$salto;

// Operadores Logicos

/* num++ → use first, increase afterwards.
++num → increase first, use afterwards.
num-- → use first, decrease afterwards.
--num → decrease first, use afterwards. */

$num3 = 20;
$num4 = null;

//Postincremento  : the variable is used first for numm3 then it increased in num2
$num4 = $num3++;

echo "Valor de num4: $num4. Valor de num3 : $num3 $salto";

//Preincremento  : the variable is  increases first then gets used 
$num4 = ++$num3;

echo "Valor de num4: $num4. Valor de num3: $num3 $salto";

// Postdecremento
$num4 = $num3--;

echo "Valor de num4: $num4. Valor de num3: $num3 $salto";

// Predecremento
$num4 = --$num3;

echo "Valor de num4: $num4. Valor de num3: $num3 $salto";

//  Comparison operatos : comparing 2 values and returning opciones true or false 

/* 
Operator	Meaning	Example
>	Greater than	10 > 5 → true
<	Less than	5 < 10 → true
>=	Greater than or equal	10 >= 10 → true
<=	Less than or equal	5 <= 10 → true
==	Equal value	12 == "12" → true
!=	Different value	12 != 10 → true
===	Equal value AND type	12 === "12" → false
!==	Different value OR type	12 !== "12" → true
 */

//  Logicos operators : Operadores logicos 


/* | && | AND (Y) | Both conditions must be true |
| || | OR (O) | At least one must be true |
| ! | NOT (NO) | Reverses the result |
 */


?>