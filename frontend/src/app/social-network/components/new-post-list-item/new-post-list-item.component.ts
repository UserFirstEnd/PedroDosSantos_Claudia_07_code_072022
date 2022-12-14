import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, switchMap, tap } from 'rxjs';
import { UserIdService } from 'src/app/auth-form/user/user.service';
import { Post } from '../../models/post.model';
import { PostsService } from '../../social-network.service';

@Component({
  selector: 'app-new-post-list-item',
  templateUrl: './new-post-list-item.component.html',
  styleUrls: ['./new-post-list-item.component.scss']
})
export class NewPostListItemComponent implements OnInit {
  mode!: string;
  postForm!: FormGroup;
  post!: Post;
  fileName!: string; //revoir
  createdDate!: Date;
  imagePreview!: string;
  role!: string;
  userId!: string;

  constructor(private route: ActivatedRoute,
    private posts: PostsService,
    private router: Router,
    private userService: UserIdService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        if (!params['id']) {
          this.mode = 'new';
          this.initEmptyForm();
          return EMPTY;
        } else {
          this.mode = 'edit';
          return this.posts.getPostById(params['id'])
        }
      }),
      tap(post => {
        if (post) {
          this.post = post;
          this.initModifyForm(post);
        }
      }),
    ).subscribe();
    this.userId = this.userService.getUserId();
    this.role = this.userService.getRole();
  }

  onSubmitForm() {
    const newPost = new Post();
    newPost.title = this.postForm.get('title')!.value;
    newPost.description = this.postForm.get('description')!.value
    newPost.userId = this.userService.getUserId();
    if (this.mode === 'new') {
      this.posts.addPost(newPost, this.postForm.get('image')!.value).pipe(
        tap(() => {
          this.router.navigate(['/posts']);
        }),
      ).subscribe();
    } else if (this.mode === 'edit') {
      this.posts.modifyPost(this.post._id, newPost, this.postForm.get('image')!.value).pipe(
        tap(() => {
          this.router.navigate(['/posts']);
        }),
      ).subscribe();
    }
  }

  onAddFile(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.postForm.get('image')!.setValue(file);
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
  
  initEmptyForm() {
    this.postForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required],
      createdDate: [null, Validators.required],
    });
  }

  initModifyForm(post: Post) {
    this.postForm = this.formBuilder.group({
      title: [post.title, Validators.required],
      description: [post.description, Validators.required],
      image: [post.imageUrl, Validators.required],
      createdDate: [post.createdDate, Validators.required],
    });
    this.imagePreview = this.post.imageUrl;
  }
}
