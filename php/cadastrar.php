<?php 
    include("conexao.php");

    $obter_dados = file_get_contents("php://input");

    $extrair = json_decode($obter_dados);

    $nome_tarefa = $extrair->tarefa->nome_tarefa;
    $completo = $extrair->tarefa->completo;

    mysqli_query($conexao, "INSERT INTO tbl_Tarefas(Nome_Tarefa, Completo) VALUES ('$nome_tarefa', $completo)");

    $tarefa = ["nome_Tarefa"=>$nome_tarefa, "completo"=>$completo];

    echo json_encode(["tarefa" => $tarefa]);
?>