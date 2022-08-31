import { Component, OnDestroy, OnInit} from '@angular/core';//interface OnDestroy
import { Post } from '../../../core/models/post.model';
import { PostService } from '../../../core/services/post.service';
import { /*take,*/ takeUntil, tap } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';//Ici, vous utilisez la méthode  interval()  (importée depuis  rxjs  ) pour créer un Observable qui émet des nombres croissants, en passant le nombre de millisecondes qui doit séparer les émissions. Vous stockez cet Observable dans une constante nommée  interval$  .
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit/*, OnDestroy*/ {

  //por afficher le tableau de tous les posts = avec *ngFor
  //posts$!: Observable<Post[]>;//version Observable
  posts$!: Observable<Post[]>;
  //private destroy$!: Subject<boolean>;//private = visible uniquement à l'interieur de ce fichier. Le type subject qui emmet des boonlean

  constructor(private postService: PostService,
  private router: Router) { }//ajout d'un argument qui a le type du service qu'il nous faut. postService, contient le service

  ngOnInit(): void {//ngOnInit()  est ce qu'on appelle un lifecycle hook. une méthode qui est appelée à un moment spécifique du cycle de vie de son component.
    this.posts$ = this.postService.getAllPost(); //on appelle la méthode getAllPost
    
    /*this.destroy$ = new Subject<boolean>();//initialiser le object subject
    this.posts = this.postService.getAllPost(); //on va donc initialiser le post local à partir du service. Le tableau post du service
    
    interval(1000).pipe(
      /*take(3),
      takeUntil(this.destroy$), //operateur
      tap(console.log),
  ).subscribe();*/
  }//on appelle ce qu'il nous faut à partir du component, la methode getAllPosts dans le service
}
//Les opérateurs  take()  et  takeUntil()  sont donc les deux à utiliser lorsque vous souscrivez à un Observable dans votre code TypeScript – lorsque vous appelez sa méthode  subscribe()  .
