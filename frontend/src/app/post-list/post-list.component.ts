import { Component, OnDestroy, OnInit} from '@angular/core';//interface OnDestroy
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { /*take,*/ takeUntil, tap } from 'rxjs/operators';
import { interval, Subject } from 'rxjs';//Ici, vous utilisez la méthode  interval()  (importée depuis  rxjs  ) pour créer un Observable qui émet des nombres croissants, en passant le nombre de millisecondes qui doit séparer les émissions. Vous stockez cet Observable dans une constante nommée  interval$  .

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  //por afficher le tableau de tous les posts = avec *ngFor
  posts!: Post[]; //declaration de la propriété à inicialiser
  private destroy$!: Subject<boolean>;//private = visible uniquement à l'interieur de ce fichier. Le type subject qui emmet des boonlean

  constructor(private postService: PostService) { }//ajout d'un argument qui a le type du service qu'il nous faut. postService, contient le service

  ngOnInit(): void {//ngOnInit()  est ce qu'on appelle un lifecycle hook. une méthode qui est appelée à un moment spécifique du cycle de vie de son component.
    this.destroy$ = new Subject<boolean>();//inicialiser le object subject
    this.posts = this.postService.getAllPost(); //on va donc inicialiser le post local à partir du service. Le tableau post du service
    
    interval(1000).pipe(
      /*take(3),*/
      takeUntil(this.destroy$), //operateur
      tap(console.log),
  ).subscribe();
  }//on appelle ce qu'il nous faut à partir du component, la methode getAllPosts dans le service


  //un subject c'est un observable que l'on peut faire emettre quand on veut
  ngOnDestroy(): void { //methode pour detruire le component, pour eviter les fuites de memoire. lifecycle hooks, mais celui qui va nous intéresser pour le pattern Destroy Subject est  ngOnDestroy
    this.destroy$.next(true);//methode next de ce subject. On continue à prendre les valeur de l'observable OnInit
  }

}
//Les opérateurs  take()  et  takeUntil()  sont donc les deux à utiliser lorsque vous souscrivez à un Observable dans votre code TypeScript – lorsque vous appelez sa méthode  subscribe()  .