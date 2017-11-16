import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RoutingModule } from './app.router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { ListaCategoriasComponent } from './categorias/lista-categorias/lista-categorias.component';
import { QuestoesFormComponent } from './components/questoes-form/questoes-form.component';

import { ResponseInterceptorService } from  
  './interceptors/response-interceptor/response-interceptor.service'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { AuthService } from './services/auth/auth.service'

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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptorService,
      multi: true  
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
