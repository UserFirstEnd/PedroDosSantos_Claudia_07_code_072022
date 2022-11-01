import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, switchMap, tap } from 'rxjs';
import { AuthServiceService } from 'src/app/auth-form/auth-service.service'; import { UserIdService } from 'src/app/auth-form/userId/userId.service';
;
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
  fileName!: string;
  createdDate!: Date;
  imagePreview!: string;

  constructor(private route: ActivatedRoute,
    private posts: PostsService,
    private router: Router,
    private userIdService: UserIdService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    //this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.route.params.pipe(//l operateur pipe pour modifier les emission de l'observable
      //valueChanges est un observable */
      switchMap(params => {
        /*, Validators.pattern(this.urlRegex)*/
        if (!params['id']) {
          console.log(params['id'])
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
  }

  onSubmitForm() {
    const newPost = new Post();
    newPost.title = this.postForm.get('title')!.value;
    newPost.description = this.postForm.get('description')!.value
    newPost.userId = this.userIdService.getUserId();
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
    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }
  
  initEmptyForm() {
    this.postForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      image: [null, Validators.required],
      createdDate: [null, Validators.required],
    });
    this.imagePreview = this.post.imageUrl;
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
