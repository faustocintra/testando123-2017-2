import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class AuthService {

  constructor(@Inject(HttpClient) private http: HttpClient) { 
    //this.http = inj.get(HttpClient)
  }

  login() {
    return this.http.get('http://localhost:3000/auth/google')
  }

}
