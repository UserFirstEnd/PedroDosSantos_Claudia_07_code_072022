import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, Subscription, Subject, tap, catchError, of } from 'rxjs';
import { TokenService } from 'src/app/auth-form/token/token.service';
import { UserIdService } from 'src/app/auth-form/user/user.service';
import { Post } from '../../models/post.model';
import { PostsService } from '../../social-network.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  posts$!: Observable<Post[]>;
  role!: string;
  errorMsg!: string;

  constructor(private route: ActivatedRoute,
    private postsService: PostsService,
    private tokenService: TokenService,
    private userIdService: UserIdService,
    private router: Router) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.posts$.pipe(
      tap(() => {
        this.errorMsg = '';
      }),
      catchError(error => {
        this.errorMsg = JSON.stringify(error);
        return of([]);
      }),
      map((route: Post[]) => {
        return route.sort((postA: Post, postB: Post) => {
          return ((+new Date(postB['createdDate'])) - (+new Date(postA['createdDate'])));
        });
      }),
    );
    this.postsService.getPosts();
    this.role = this.userIdService.getRole();
  };

  logout() {
    this.tokenService.clearToken();
    this.userIdService.clearUserId();
    this.userIdService.clearRole();
    this.router.navigate(['/']);
  };
};
