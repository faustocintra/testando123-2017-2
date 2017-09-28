import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaCategoriasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
