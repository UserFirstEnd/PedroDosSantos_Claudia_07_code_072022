import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserIdService {

    userId!: User;

    constructor() { }

    saveUserId(userId: any): void {
        localStorage.setItem('userId', JSON.stringify(userId.userId));
    }

    saveRole(userId: any): void {
        localStorage.setItem('role', JSON.stringify(userId.role));
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