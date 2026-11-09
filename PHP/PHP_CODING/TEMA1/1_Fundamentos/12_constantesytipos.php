<!-- Part 2: constants,datatypes,conversions -->
<?php
$salto = "<br>";
/* Constants its variable that we cannot change at all we use define for it */
define("numero", 3.146); //constante
echo numero;
/* Data types  */
$var1 = 4; //int
$var2 = 4.55; //float
$var3 = "cuatro como uno"; //String
$var4 = true; //boolean
$var5 = null; //null
/* var_dumb() : check and display the type and value of variable */
echo $salto;
var_dump($var1);
echo $salto;
var_dump($var2);
echo $salto;
var_dump($var3);
echo $salto;
var_dump($var4);
echo $salto;
/* Otro ejemplos */
$activo = true;
$nada = null;
var_dump($activo);
echo $salto;
var_dump($nada);


echo $salto;
echo $salto;
echo $salto;



/* Conversion de tipos */
// Intval 
$cadena = "123BC";

echo "$salto Mostrar el número en modo cadena: ";

var_dump($cadena); //String

$cadena = intval($cadena); //converts it into an integer

var_dump($cadena); //int

echo $salto;
echo $salto;
//Strval()
$numero = 13.1;

echo "$salto Mostar el número decimal: ";

var_dump($numero); //float

$numero = strval($numero); //convert it into a string

var_dump($numero); //String

echo $salto;
echo $salto;

//Floatval()
$entero = "1b32.1a";

echo "$salto Mostrar el número entero: ";

var_dump($entero); //int

var_dump(floatval($entero)); //convert it into a float


















?>