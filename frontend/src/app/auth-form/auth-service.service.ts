import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private userId = '';
  
  constructor(private http: HttpClient) { }
  login(data: any):Observable<any>{
    console.log(data)
    return this.http.post(`${environment.apiUrl}/auth/connexion`,data);
  }

  getUserId() {
    return this.userId;
  }
}
