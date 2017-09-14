import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  private questoes;

  constructor(private http: HttpClient) { 
    http.get('http://localhost:3000/questoes')
      .subscribe(dados => this.questoes = dados);
  }

  ngOnInit() {
  }

}
