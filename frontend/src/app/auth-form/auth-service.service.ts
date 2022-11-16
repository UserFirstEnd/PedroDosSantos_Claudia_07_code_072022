import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<{ userId: string, token: string, role: any }>(`${environment.apiUrl}/auth/login`, { email: email, password: password });
  }

  createUser(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/signup`, { email: email, password: password });;
  }
}
