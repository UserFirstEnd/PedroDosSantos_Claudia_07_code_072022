import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dataLogin } from './dataLogin';
import { User } from './models/user.model';
import { token } from './token/token';
import { userId } from './user/userId';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private http: HttpClient,
    private router: Router) { }

  login(email: string, password: string): Observable<User> {
    console.log({ email: email, password: password })
    return this.http.post<{ userId: string, token: string, role: any }>(`${environment.apiUrl}/auth/login`, { email: email, password: password });
  }

  createUser(email: string, password: string): Observable<User> {
    console.log({ email: email, password: password })
    return this.http.post<User>(`${environment.apiUrl}/auth/signup`, { email: email, password: password });;
  }
}
