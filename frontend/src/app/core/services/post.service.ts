/*Le service centralise toutes les interactions avec les données, 
donc c'est bien là que vous allez gérer les communications avec le serveur.*/

import { Injectable } from "@angular/core";
import { Post } from '../models/post.model'
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap, Subject } from "rxjs";
import { LoginComponent } from "src/app/auth/login/login.component";

@Injectable({
    providedIn: 'root'
})/*decorateur + object de config + une clé = ça explique à angular que ce service doit etre enregistrer à la
racine de l'appli*/

//Les services permettent de centraliser les données et la logique pour les différents domaines de votre application.
//Créer un service est aussi simple qu'ajouter le décorateur  @Injectable()  à une classe.
//Pour injecter un service dans un component, ajoutez un argument au constructor du component qui a le type du service, 
//par exemple private userService: UserService
export class PostService {

    constructor(private http: HttpClient) { }

    posts$ = new Subject<Post[]>();

    getAllPost() {//methode pour retourner le tableau
        return this.http.get<Post[]>('http://localhost:3000/api/posts');//get qui retourne un tableau des posts
    }

    getOnePostById(_id: string) {
        //on recupere un post où son id est strictement egal au postId
        console.log(_id)
        return this.http.get<Post>(`http://localhost:3000/api/posts/${_id}`);
    }

    addPost(post: Post, image: File) {
        const formData = new FormData();
        formData.append('post', JSON.stringify(post)), 
        console.log(post)
        console.log(image)
        formData.append('image', image);
        return this.http.post<{ message: string }>('http://localhost:3000/api/posts', formData);
    }

    modifyPost(_id: string, post: Post, image: string | File) {
        if (typeof image === 'string') {
          return this.http.put<{ message: string }>(`http://localhost:3000/api/posts/${_id}`, post);
        } else {
          const formData = new FormData();
          formData.append('post', JSON.stringify(post));
          formData.append('image', image);
          return this.http.put<{ message: string }>(`http://localhost:3000/api/posts/${_id}`, formData);
        }
      }
    
      deletePost(_id: string) {
        return this.http.delete<{ message: string }>(`http://localhost:3000/api/posts/${_id}`);
      }

}