import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap, take, tap } from 'rxjs';
import { UserIdService } from 'src/app/auth-form/user/user.service';
import { Post } from '../../models/post.model';
import { PostsService } from '../../social-network.service';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post!: Post;
  post$!: Observable<Post>;
  //user!: Observable<User>;
  role!: string;
  userId!: string;
  liked!: boolean;
  likes!: string;

  constructor(private postService: PostsService,
    private postList: PostListComponent,
    private userService: UserIdService,
    private router: Router) { }

  ngOnInit(): void {
    const postId = this.post._id;
    this.post$ = this.postService.getPostById(postId).pipe(
      tap(post => {
        if (post.usersLiked.find(user => user === this.userId)) {
          this.liked = true;
        }
      })),
    this.userId = this.userService.getUserId();
    this.role = this.userService.getRole();
  }

  onModify() {
    let userRole = this.userService.getRole();
    console.log(userRole)
    if (userRole === 'Admin') {
      this.post$.pipe(
        take(1),
        tap(post => this.router.navigate(['admin', post._id])),
      ).subscribe();
    } else {
      this.router.navigate(['posts', this.post._id])
    }
  }

  onDelete(_id: any) {
    this.postService.deletePost(this.post._id).subscribe(
      (resp) => {
        this.postList.ngOnInit();
        console.log(resp);
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      }
    );
  }

  onLike = () => {
    this.post$.pipe(
      take(1),
      switchMap((post: Post) => this.postService.likePost(this.post._id, !this.liked).pipe(
        map(liked => ({ ...post, likes: liked ? post.likes + 1 : post.likes - 1 })),
      )),
      map(() => (this.postList.ngOnInit())),
    ).subscribe();
  }
}

