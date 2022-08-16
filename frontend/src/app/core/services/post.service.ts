/*Le service centralise toutes les interactions avec les données, 
donc c'est bien là que vous allez gérer les communications avec le serveur.*/

import { Injectable } from "@angular/core";
import { Post } from '../models/post.model'
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from "rxjs";

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

    //posts: Post[] = [];

    getAllPost(): Observable<Post[]> {//methode pour retourner le tableau
        return this.http.get<Post[]>('http://localhost:3000/api/posts');//get qui retourne un tableau des posts
    }

    getOnePostById(postId: number): Observable<Post> {
        //on recupere un post où son id est strictement egal au postId
        return this.http.get<Post>(`http://localhost:3000/api/posts/${postId}`);
    }


    postById(postId: number, postType: 'like' | 'unLike'): Observable<Post> {
        return this.getOnePostById(postId).pipe(
            map(post => ({
                ...post,
                like: postType === 'like' ? post.like + 1 : post.like - 1
            })),
            switchMap(updatedPost => this.http.put<Post>(
                `http://localhost:3000/api/posts/${postId}`,
                updatedPost)
            )
        );
    }

    addPost(formValue: { id: number, title: string, description: string, imageUrl: string, location?: string }): Observable<Post> {
        return this.getAllPost().pipe(
            map(posts => [...posts].sort((a, b) => a.id - b.id)),
            map(sortedPosts => sortedPosts[sortedPosts.length - 1]),
            map(previousPost => ({
                ...formValue,
                like: 0,
                createdDate: new Date(),
                id: previousPost.id + 1
            })),
            switchMap(newPost => this.http.post<Post>(
                'http://localhost:3000/api/posts',
                newPost)
            )
        );
    }

}