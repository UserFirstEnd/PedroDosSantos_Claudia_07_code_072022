import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { lastValueFrom, map, Observable, of, switchMap, take, tap } from 'rxjs';
import { User } from 'src/app/auth-form/models/user.model';
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
  hidden = false;
  role!: string;
  errorMessage!: string;
  userId!: string;
  liked!: boolean;
  disliked!: boolean;
  likes!: string;
  showDialog = false;

  constructor(private postService: PostsService,
    private postList: PostListComponent,
    private userService: UserIdService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: NgToastService) { }

  ngOnInit(): void {
    const postId = this.post._id;
    this.post$ = this.postService.getPostById(postId).pipe(
      tap(post => {
        if (post.usersLiked.find(user => user === this.userId)) {
          this.liked = true;
        } else if (post.usersDisliked.find(user => user === this.userId)) {
          this.disliked = true;
        }
      })
    )
    this.userId = this.userService.getUserId();
    this.role = this.userService.getRole();
  }

  openSuccess() {
    this.toast.success({ detail:'Success', summary:'This is Success', sticky: true, position:'tr' })
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
        //this.matDialog.open(DialogComponent);
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      }
    );
  }

  onLike = () => {
    if (this.disliked) {
      console.log(this.disliked)
      return;
    }
    this.post$.pipe(
      take(1),
      switchMap((post: Post) => this.postService.likePost(this.post._id, !this.liked).pipe(
        map(liked => ({ ...post, likes: liked ? post.likes + 1 : post.likes - 1 })),
      )),
      map(() => (this.postList.ngOnInit())),
    ).subscribe();
  }
}

