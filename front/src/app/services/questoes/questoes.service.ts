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
    
    // Existe _id nos meus dados?
    if(dados._id) {
      // Atualiza um objeto existente
      return this.http.post('http://localhost:3000/questoes', dados)
    }
    else {
      // Cria um novo objeto
      return this.http.put('http://localhost:3000/questoes', dados)
    }
  }

  obterPorId(id: string) {
    console.log('http://localhost:3000/questoes/' + id)
    return this.http.get('http://localhost:3000/questoes/' + id)
  }

  excluir(id: string) {
    return this.http.delete('http://localhost:3000/questoes/' + id)
  }

}
