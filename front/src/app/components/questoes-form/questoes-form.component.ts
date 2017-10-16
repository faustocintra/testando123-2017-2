import { Component, OnInit } from '@angular/core';
import { Questao, QuestoesService } from '../../services/questoes/questoes.service'
import { CategoriasService } from '../../services/categorias/categorias.service'

@Component({
  selector: 'app-questoes-form',
  templateUrl: './questoes-form.component.html',
  styleUrls: ['./questoes-form.component.css'],
  providers: [QuestoesService, CategoriasService]
})
export class QuestoesFormComponent implements OnInit {

  private model: Questao;
  private categorias : any
  
  constructor(private qs: QuestoesService, private cs: CategoriasService) { }

  ngOnInit() {

    // Criando um novo objeto Questao vazio
    this.model = new Questao()
    this.categorias = this.cs.listarTodos()
        
    this.model.descricao = 'Quanto é 1+1?'

  }

}
