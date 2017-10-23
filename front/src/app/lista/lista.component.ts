import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestoesService } from '../services/questoes/questoes.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [QuestoesService]
})

export class ListaComponent implements OnInit {

  private questoes;

  constructor(
    private http: HttpClient,
    private qs: QuestoesService
  ) { 
    
  }

  ngOnInit() {
    this.exibirLista()   
  }

  exibirLista() {
    this.qs.listarTodos().subscribe(dados => this.questoes = dados)
  }

  excluir(id: string) {
    if(confirm('Deseja realmente excluir esta questão?')) {
      this.qs.excluir(id).subscribe(
        () => this.exibirLista(),
        erro => console.error(erro)
      )
    }
  }

}
