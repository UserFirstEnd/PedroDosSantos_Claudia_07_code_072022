import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dataLogin } from './dataLogin';
import { token } from './token/token';
import { userId } from './userId/userId';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private http: HttpClient,
    private router: Router) { }

  login(email: string, password: string): Observable<token> {
    console.log({ email: email, password: password })
    return this.http.post<{ userId: string, token: string }>(`${environment.apiUrl}/auth/login`, { email: email, password: password });
  }

  createUser(email: string, password: string): Observable<token> {
    console.log({ email: email, password: password })
    return this.http.post<token>(`${environment.apiUrl}/auth/signup`, { email: email, password: password });;
  }
}
