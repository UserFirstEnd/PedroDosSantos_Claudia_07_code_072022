import { Component, OnInit, Input } from '@angular/core'; //Input = decorateur ?
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  /*propriété personalisées : Input permet de'injecter la propriété Post depuis l'exterieur. 
  Pour l'injecter faut le créér depuis l'exterieur, dans app.component, son parent*/
  @Input() post!: Post;

  buttonTextLike!: string;
  //buttonTextDislike!: string;
  //dislike!: number;

  constructor(private postService: PostService,//injjection de postService pour tester la methode getOnePostById
    private router: Router) {}//irouter pour le changement de route à partir d'angular router

  ngOnInit() {
    //this.dislike = 0;
    this.buttonTextLike = "Oh Like!";
  }

  onLike() {
    if (this.buttonTextLike === 'Oh Like!') {
      this.postService.postById(this.post.id, 'like');
      this.buttonTextLike = 'Oops, unLike!';
    } else {
      this.postService.postById(this.post.id, 'unLike');
      this.buttonTextLike = 'Oh Like!';
    }
  }

  onViewPost() {
this.router.navigateByUrl(`posts/${this.post.id}`)//recup de la variable post
  }
}
