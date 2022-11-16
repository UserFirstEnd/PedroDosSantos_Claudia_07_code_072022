import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    token!: User ;
    
    constructor(private router: Router) { }

    saveToken(token: any): void {
        localStorage.setItem('token', JSON.stringify(token.token));
    }

    isLogged(): boolean {
        const token = localStorage.getItem('token');
        return !!token
    }

    clearToken(): void {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }

    getToken() {
        //à corriger : check getToken
        const token = localStorage['token']
        if(token) return JSON.parse(token);
    }
}