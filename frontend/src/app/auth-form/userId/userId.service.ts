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

    getUserId() {
        return JSON.parse(localStorage['userId']);
    }

    clearUserId() {
        localStorage.removeItem('userId');
    }
}