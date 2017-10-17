import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';
import { QuestoesFormComponent } from './components/questoes-form/questoes-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaCategoriasComponent,
    QuestoesFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
