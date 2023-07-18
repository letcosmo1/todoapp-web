<?php
    $hostname = "localhost";
    $username = "root";
    $password = "Leticia2205!";
    $database = "bd_TodoApp";

    $conexao = mysqli_connect($hostname, $username, $password, $database);

    mysqli_set_charset($conexao, "utf8");
?>