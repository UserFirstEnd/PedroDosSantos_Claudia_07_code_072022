import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { userId } from './userId';

@Injectable({
    providedIn: 'root'
})
export class UserIdService {

    userId!: userId;

    constructor(private router: Router) { }

    saveUserId(userId: any): void {
        localStorage.setItem('userId', JSON.stringify(userId.userId));
    }

    saveRole(userId: any): void {
        localStorage.setItem('role', JSON.stringify(userId.role));
        console.log(userId.role)
    }

    getUserId() {
        return JSON.parse(localStorage['userId']);
    }

    getRole() {
        return JSON.parse(localStorage['role']);
    }

    clearUserId() {
        localStorage.removeItem('userId');
    }

    clearRole() {
        localStorage.removeItem('role');
    }
}