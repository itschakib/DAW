<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INTRO</title>
</head>

<body>
    <h1>hola</h1>
    <!-- Parte estática de mi web -->
    <p>Esto es una intro de PHP</p>
    <p>Este texto es HTML puro, no tiene na de CSS ni JS ni PHP..</p>
    <!-- To start a php element inside the html file we open like this -->
    <p>
        <?php
        /* this is for to skip a line */
        $salto = "<br>";
        /* this is to display smth in the page */
        echo "hola";
        ?>
    </p>
    <!-- Or u can do both by putting the html element inside of php using "" -->
    <?php
    echo "<p>hola<p>";
    /* the date function */
    echo date("d/m/y H:i:s");
    echo $salto . $salto;
    /* to create a variable we use $ */
    $lenguaje = "PHP";
    $ciclo = "DAW";
    /* to join diffrent pieces of information we use .  */
    echo "El lenguaje de backend q aprendemos este año será " . $lenguaje . $salto;
    /* o the second methode is this */
    echo "El lenguaje de back q aprendemos este año será $lenguaje $salto";
    /* the variables in php cannot start with a number only letter so we use _ to seperate them */
    // $1var=1;
    $_1var = 1;
    ?>

</body>

</html>