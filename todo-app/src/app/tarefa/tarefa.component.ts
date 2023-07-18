import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TarefaInterface } from './tarefa';
import { TarefaService } from './tarefa.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
  url =  "http://localhost/api/php/";
  tarefas: TarefaInterface[] = [];
  nome_tarefa = "";
  html_input = document.getElementsByTagName("input");

  constructor(private http: HttpClient, private tarefa_service: TarefaService) {}

  ngOnInit(): void {
    this.obterTarefas();
  }

  obterTarefas() {
    this.tarefa_service.obterTarefas().subscribe((res: TarefaInterface[]) => {
      this.tarefas = res;
    });
  }

  cadastrarTarefa() {
    const tarefa: TarefaInterface = {nome_tarefa: this.nome_tarefa, completo: 0};
    this.html_input[0].value = "";

    this.tarefa_service.cadastrarTarefa(tarefa).subscribe((res => {
      this.tarefas.push(res);
      this.obterTarefas();
    }));
  }
  
  excluirTarefa(tarefa: TarefaInterface) {
    this.tarefas = this.tarefa_service.excluirTarefa(tarefa);
  }

  alterarNomeTarefa(tarefa: TarefaInterface) {
    const novo_nome = prompt("Novo nome: ");
    tarefa.nome_tarefa = novo_nome ? novo_nome : "";
    this.tarefa_service.alterarNomeTarefa(tarefa);
  }

  alterarCompletoTarefa(tarefa: TarefaInterface) {
    tarefa.completo == 0 ? tarefa.completo = 1 : tarefa.completo = 0;
    this.tarefa_service.alterarCompletoTarefa(tarefa);
  }
}
