import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { TokenService } from 'src/app/auth-form/token/token.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$!: Observable<Post[]>;

  constructor(private route: ActivatedRoute,
    private tokenService: TokenService,
    private router: Router) { }

  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(//data = les données, données par le resolver
      map(data => data['posts'])
    );
  }

  logout() {
    this.tokenService.clearToken();
    this.router.navigate(['/'])
  }
}
