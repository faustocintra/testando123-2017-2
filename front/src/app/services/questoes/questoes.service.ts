import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Questao {
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

}
