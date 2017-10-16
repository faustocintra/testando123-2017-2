import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// A classe exportada aqui deve se espelhar no model do back-end
export class Categoria {
  public _id: string;
  public descricao: string;
}

@Injectable()
export class CategoriasService {

  constructor(private http: HttpClient) { }

  listarTodos() {
    return this.http.get('http://localhost:3000/categorias')
  }

}
