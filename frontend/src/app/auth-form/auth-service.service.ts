import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dataLogin } from './dataLogin';
import { token } from './token/token';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userId = '';

  url = `${environment.apiUrl}/auth/login`

  constructor(private http: HttpClient) { }
  login(dataLogin: dataLogin): Observable<token> {
    console.log(dataLogin)
    return this.http.post<token>(this.url, dataLogin);
  }

  getUserId() {
    return this.userId;
  }
}
