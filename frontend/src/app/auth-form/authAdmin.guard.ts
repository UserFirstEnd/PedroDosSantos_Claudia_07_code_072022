import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PostListComponent } from '../social-network/components/post-list/post-list.component';
import { UserIdService } from './user/user.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuardAdmin implements CanActivate {

    constructor(private router: Router,
        private postList: PostListComponent,
        private userService: UserIdService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        if (this.userService.getRole() === 'Admin') {
            return true
        } else {
            this.postList.logout()
            return this.router.navigate(['connexion']);
        }
    }

    
}