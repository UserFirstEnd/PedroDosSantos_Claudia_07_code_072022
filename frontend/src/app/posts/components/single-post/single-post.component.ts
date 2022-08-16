import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  //buttonTextDislike!: string;
  //dislike!: number;

  constructor(private postService: PostService,
    private route: ActivatedRoute) { }//injjection de postService pour tester la methode getOnePostById

  ngOnInit() {
    //this.dislike = 0;
    this.buttonTextLike = "Oh Like!";
    const postId = +this.route.snapshot.params['id']; //pour recuperer l'id du post, sur l'object params, sur l'object snapshot, de la route activée
    //les params sao de type string car ce sont des params ajoutés sur l'adresse. les ids sont des number, pour pouvoir recup un number, on doit ajouter un + = typecast
    this.post$ = this.postService.getOnePostById(postId);
  }

  onLike(postId: number) {
    if (this.buttonTextLike === 'Oh Like!') {
      this.post$ = this.postService.postById(postId, 'like').pipe(
        tap(() => this.buttonTextLike = 'Oops, unLike!')
      );
    } else {
      this.post$ = this.postService.postById(postId, 'unLike').pipe(
        tap(() => this.buttonTextLike = 'Oh Like!')
      );
    }
  }
}
