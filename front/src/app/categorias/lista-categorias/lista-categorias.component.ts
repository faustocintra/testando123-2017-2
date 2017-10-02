import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {

  private categorias;

  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/categorias')
      .subscribe(dados => this.categorias = dados);
  }

  ngOnInit() {
  }

}
