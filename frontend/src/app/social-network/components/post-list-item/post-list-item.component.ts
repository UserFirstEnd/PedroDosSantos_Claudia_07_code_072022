import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
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

  constructor(private route: ActivatedRoute,
    private postService: PostsService,
    private router: Router) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.params['id']; //pour recuperer l'id du post, sur l'object params, sur l'object snapshot, de la route activée
    //les params sao de type string car ce sont des params ajoutés sur l'adresse. les ids sont des number, pour pouvoir recup un number, on doit ajouter un + = typecast
    this.post$ = this.postService.getPostById(postId);
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  onModify() {
  }
}
