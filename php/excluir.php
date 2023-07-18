<?php 
    include("conexao.php");

    $id_tarefa = $_GET["id"];

    mysqli_query($conexao, "DELETE FROM tbl_Tarefas WHERE ID_Tarefa = $id_tarefa");
?>