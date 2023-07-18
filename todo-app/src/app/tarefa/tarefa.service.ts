import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TarefaInterface } from './tarefa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  url =  "http://localhost/api/php/";
  tarefas: TarefaInterface[] = [];

  constructor(private http: HttpClient) { }

  obterTarefas(): Observable<TarefaInterface[]> {
    return this.http.get(this.url + "listar").pipe(
      map((res) => {
        this.tarefas = Object.values(res)[0];
        return this.tarefas;
      })
    );
  }

  cadastrarTarefa(tarefa: TarefaInterface): Observable<TarefaInterface> {
    return this.http.post(this.url+"cadastrar", {tarefa: tarefa}).pipe(
      map((res) => {
        return Object.values(res)[0];
      })
    );
  }

  excluirTarefa(tarefa: TarefaInterface): TarefaInterface[] {
    const id_tarefa = tarefa.id_tarefa ? tarefa.id_tarefa : -1;

    const params = new HttpParams().set("id", id_tarefa?.toString());

    this.http.delete(this.url+"excluir.php/", {params: params}).subscribe();

    this.tarefas = this.tarefas.filter((t) => {
      return t.id_tarefa !== tarefa.id_tarefa;
    });

    return this.tarefas;
  }

  alterarNomeTarefa(tarefa: TarefaInterface) {
    this.http.put(this.url+"alterar-nome", {tarefa: tarefa}).subscribe();
  }

  alterarCompletoTarefa(tarefa: TarefaInterface) {
    this.http.put(this.url+"alterar-completo", {tarefa: tarefa}).subscribe();
  }

}
