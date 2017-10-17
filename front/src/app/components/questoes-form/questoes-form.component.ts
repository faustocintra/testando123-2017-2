import { Component, OnInit } from '@angular/core';
import { Questao, QuestoesService } from '../../services/questoes/questoes.service'
import { CategoriasService } from '../../services/categorias/categorias.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-questoes-form',
  templateUrl: './questoes-form.component.html',
  styleUrls: ['./questoes-form.component.css'],
  providers: [QuestoesService, CategoriasService]
})
export class QuestoesFormComponent implements OnInit {

  private model: Questao;
  private categorias : any
  
  constructor(
    private qs: QuestoesService, 
    private cs: CategoriasService,
    private router: Router
  ) { }

  ngOnInit() {

    // Criando um novo objeto Questao vazio
    this.model = new Questao()
    this.categorias = this.cs.listarTodos()
        
    //this.model.descricao = 'Quanto é 1+1?'

  }

  enviar() {
    this.qs.salvar(this.model).subscribe(
      function() {
        // Volta à listagem de questões
        //this.router.navigate(['/questoes'])        
      },
      function(erro) {
        console.error(erro);
      }
    )
  }

}
