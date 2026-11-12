<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forumulario_filtros</title>
    <style>
        pre {
            background-color: gray;
        }

        .error {
            color: red;
        }

        .acierto {
            color: green;
        }
    </style>
</head>

<body>
    <h3>action con filter_var</h3>
    <?php
    /*  
    filert_var():sirve para comprobar si un valor tiene el formato esperado y , si es asi 
    devolverlo convertido al tipo correcto:
     
    *
    *
    *ES LA HERRAMIENTA PENSABA PARA LOS DATOS DE UN FORMULARIO , QUE SIEMPRE SIEMPRE LLEGAN CADENAS.
    *
    SI EL VALOR ES VALIDO , DEVUELVE EL VALOR YA CONVERTIO ("25"PASA A SER INT(25)) Y SI NO ES
    *VALIDO , DEVUELVE FALSE
    *
    *INTVAL() SIEMPRE DEVUELVE UN DATO , AUNQUE NO SEA CORRECTO ( BASURA) ; FILER_VAR()RECHAZA LO QUE
    *NO ES O NO SE PUEDE CONVERTIR A ENTERO (ESTO EN CASO DE QUE APLIQUEMOS EN FILTRO DE ENTEROS)
    *
    *FILTER_VALIDATE_INT
    *FILTER_VALIDATE_FLOAT
    *FILTER_VALIDATE_EMAIL
    *FILTER VALIDATE_URL
    *FILTER_VALIDATE_BOOLEAN
    *
    */
    ?>
    <form action="" method="get">
        <input type="number" name="entero" id="">
        <input type="number" name="decimal" id="">
        <input type="number" name="correo" id="">
        <input type="number" name="url" id="">
        <input type="number" name="boolean" id="">
        >


        <input type="submit" value="Enviar">
    </form>
    <!-- < "|" ?= $_GET["entero"] ?> -->
    <?php
    if (isset($_GET["entero"])) {


        $entero = filter_var($_GET["entero"], FILTER_VALIDATE_INT);
        $decimal = filter_var($_GET["decimal"], FILTER_VALIDATE_FLOAT);
        $correo = filter_var($_GET["correo"], FILTER_VALIDATE_EMAIL);
        $url = filter_var($_GET["url"], FILTER_VALIDATE_URL);
        $boolean = filter_var($_GET["boolean"], FILTER_VALIDATE_BOOLEAN);
    }
    ?>
</body>

</html>