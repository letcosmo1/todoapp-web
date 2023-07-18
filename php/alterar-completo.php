<?php 
    include("conexao.php");

    $obter_dados = file_get_contents("php://input");

    $extrair = json_decode($obter_dados);

    $id_tarefa = $extrair->tarefa->id_tarefa;
    $completo = $extrair->tarefa->completo;

    mysqli_query($conexao, "UPDATE tbl_Tarefas SET Completo = $completo WHERE ID_Tarefa = $id_tarefa");
?>