import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {
  /*propriété personalisées : Input permet de'injecter la propriété Post depuis l'exterieur. 
   Pour l'injecter faut le créér depuis l'exterieur, dans app.component, son parent*/
  post$!: Observable<Post>;
  buttonTextLike!: string;
  userId!: string;
  _id!: string;
  post!: Post;
  //buttonTextDislike!: string;
  //dislike!: number;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }//injjection de postService pour tester la methode getOnePostById

  ngOnInit() {
    //this.dislike = 0;
    this.buttonTextLike = "Oh Like!";
    const postId = this.route.snapshot.params['id']; //pour recuperer l'id du post, sur l'object params, sur l'object snapshot, de la route activée
    //les params sao de type string car ce sont des params ajoutés sur l'adresse. les ids sont des number, pour pouvoir recup un number, on doit ajouter un + = typecast
    this.post$ = this.postService.getOnePostById(postId);
  }

  onLike(_id: string) {
    if (this.buttonTextLike === 'Oh Like!') {
      this.post$ = this.postService.getOnePostById(_id).pipe(
        tap(() => this.buttonTextLike = 'Oops, unLike!')
      );
    } else {
      this.post$ = this.postService.getOnePostById(_id).pipe(
        tap(() => this.buttonTextLike = 'Oh Like!')
      );
    }
  }

  onViewPost() {
    this.router.navigateByUrl(`posts/${this.post._id}`)//recup de la variable post
    console.log(`${this.post.title}`)
  }
  
  onModify() {
    this.post$.pipe(
      take(1),
      tap(_id => this.router.navigate(['/modify-post', _id]))
    ).subscribe();
  }
}
