import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Questao {
  public _id: string;
  public descricao: string;
  public categoria: string;
}

@Injectable()
export class QuestoesService {

  constructor(private http : HttpClient) { 

  }

  listarTodos() {
    return this.http.get('http://localhost:3000/questoes');
  }

  salvar(dados: Questao) {
    console.log(dados)
    return this.http.put('http://localhost:3000/questoes', dados)
  }

  obterPorId(id: string) {
    console.log('http://localhost:3000/questoes/' + id)
    return this.http.get('http://localhost:3000/questoes/' + id)
  }

}
