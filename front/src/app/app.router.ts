import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from './lista/lista.component';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';


const routes: Routes = [
   // Listagem de questões
   {
      path: '',
      component: ListaComponent
   },
   
   // Listagem de questões (rota alternativa)
   {
      path: 'questoes',
      component: ListaComponent
   },

   // Listagem de categorias
   
   {
      path: 'categorias',
      component: ListaCategoriasComponent
   }
   
]

export const RoutingModule = RouterModule.forRoot(routes)