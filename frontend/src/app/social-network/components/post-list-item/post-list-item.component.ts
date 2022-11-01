import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, of, switchMap, take, tap } from 'rxjs';
import { UserIdService } from 'src/app/auth-form/userId/userId.service';
import { Post } from '../../models/post.model';
import { PostsService } from '../../social-network.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post!: Post;
  post$!: Observable<Post>;
  hidden = false;
  errorMessage!: string;
  likePending!: boolean;
  userId!: string;
  liked!: number;
  disliked!: number;

  constructor(private postService: PostsService,
    private userIdService: UserIdService,
    private router: Router) { }

  ngOnInit(): void {
    const postId = this.post._id;
    this.post$ = this.postService.getPostById(postId);
    this.userId = this.userIdService.getUserId();
    this.post.usersLiked.find(user => user === this.userId)
    this.post.usersDisliked.find(user => user === this.userId)
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  onModify() {
    this.post$.pipe(
      take(1),
      tap(post => this.router.navigate(['posts', post._id])),
    ).subscribe();
  }

  onDelete() {
    this.post$.pipe(
      take(1),
      switchMap(post => this.postService.deletePost(post._id)),
      tap(message => {
        console.log(message);
        this.postService.getPosts();//revoir
      }),
      catchError(error => {
        this.errorMessage = error.message;
        console.error(error);
        return EMPTY;
      })
    ).subscribe();
  }

  onLike() {
    if (this.disliked) {
      return;
    }
    this.postService.likePost(this.post._id, !this.liked).pipe(
      map(liked => ({ ...this.post, likes: liked ? this.post.likes + 1 : this.post.likes - 1 }))
    ).subscribe();
  }

  onDislike() {
    if (this.liked) {
      return;
    }
    this.postService.dislikePost(this.post._id, !this.disliked).pipe(
      map(disliked => ({ ...this.post, dislikes: disliked ? this.post.dislikes + 1 : this.post.dislikes - 1 })),
    ).subscribe();
  }
}
