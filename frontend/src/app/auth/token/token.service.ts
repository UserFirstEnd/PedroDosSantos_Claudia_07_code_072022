import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { token } from './token';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    token!: token;
    constructor(private router: Router) { }

    saveToken(token: any): void {
        localStorage.setItem('token', JSON.stringify(token));
    }

    isLogged(): boolean {
        const token = localStorage.getItem('token');
        console.log(token);
        return !!token
    }

    clearToken(): void {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }
}