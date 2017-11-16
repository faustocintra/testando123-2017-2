import { Injectable, Inject } from '@angular/core'
import { HttpRequest, HttpResponse, HttpClient, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse }
  from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import { ReflectiveInjector } from '@angular/core'
//import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ResponseInterceptorService implements HttpInterceptor {

  constructor(private router: Router) {
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {

    return next.handle(req).do(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Nada aqui por enquanto
        }
      },
      (erro: any) => {
        if(erro instanceof HttpErrorResponse && erro.status == 401) {
          console.log('Precisa de autenticação');
          window.location.href = "http://localhost:3000/auth/google"

        }
      }
    )
    
  }

}
