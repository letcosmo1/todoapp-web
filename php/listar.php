<?php 
    include("conexao.php");

    $query = "SELECT * FROM tbl_Tarefas";

    $resultado = mysqli_query($conexao, $query);

    $array_tarefas = [];

    $i = 0;

    while($row = mysqli_fetch_assoc($resultado)) {
        $array_tarefas[$i]["id_tarefa"] = $row["ID_Tarefa"];
        $array_tarefas[$i]["nome_tarefa"] = $row["Nome_Tarefa"];
        $array_tarefas[$i]["completo"] = $row["Completo"];
        $i++;
    }

    echo json_encode(["tarefas" => $array_tarefas]);
?>