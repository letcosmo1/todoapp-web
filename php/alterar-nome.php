<?php 
    include("conexao.php");

    $obter_dados = file_get_contents("php://input");

    $extrair = json_decode($obter_dados);

    $id_tarefa = $extrair->tarefa->id_tarefa;
    $nome_tarefa = $extrair->tarefa->nome_tarefa;

    mysqli_query($conexao, "UPDATE tbl_Tarefas SET Nome_Tarefa = '$nome_tarefa' WHERE ID_Tarefa = $id_tarefa");
?>