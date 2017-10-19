import { Component, OnInit } from '@angular/core';
import { Questao, QuestoesService } from '../../services/questoes/questoes.service'
import { CategoriasService } from '../../services/categorias/categorias.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-questoes-form',
  templateUrl: './questoes-form.component.html',
  styleUrls: ['./questoes-form.component.css'],
  providers: [QuestoesService, CategoriasService]
})
export class QuestoesFormComponent implements OnInit {

  private model: Questao = new Questao();
  private categorias : any
  private id: string
  
  constructor(
    private qs: QuestoesService, 
    private cs: CategoriasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.categorias = this.cs.listarTodos()

    this.route.params.subscribe(
      params => {
        // Se há o parâmetro id, precisamos buscar o registro para editá-lo
        if(params['id']) {
          this.id = params['id']
          // Vai buscar o registro existente para edição
          this.qs.obterPorId(this.id).subscribe(
            (q: Questao) => this.model = q
          )
        }
        else {
          // Criando um novo objeto Questao vazio
          this.model = new Questao()
        }
      }
    )

  }

  enviar() {
    // Salva localmente uma referência ao roteador, para
    // evitar que ela se perca após o salvamento dos dados
    let roteador = this.router
    
    this.qs.salvar(this.model).subscribe(
      function() {
        // Volta à listagem de questões
        roteador.navigate(['/questoes'])        
      },
      function(erro) {
        console.error(erro);
      }
    )
  }

}
