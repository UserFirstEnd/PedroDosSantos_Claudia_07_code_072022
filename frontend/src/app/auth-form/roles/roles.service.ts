import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class RolesService {

    role!: User;
    constructor(private router: Router) { }

    saveRole(): void {
        const role = localStorage['role']
        if(role) return JSON.parse(role);
    }

    clearRole(): void {
        localStorage.removeItem('role');
        this.router.navigate(['/']);
    }

    getRole() {
        const role = localStorage['role']
        if(role) return JSON.parse(role);
    }
}