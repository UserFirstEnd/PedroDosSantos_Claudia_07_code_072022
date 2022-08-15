import { Injectable } from "@angular/core";
import { Post } from '../models/post.model'

@Injectable({
    providedIn: 'root'
})/*decorateur + object de config + une clé = ça explique à angular que ce service doit etre enregistrer à la
racine de l'appli*/

//Les services permettent de centraliser les données et la logique pour les différents domaines de votre application.
//Créer un service est aussi simple qu'ajouter le décorateur  @Injectable()  à une classe.
//Pour injecter un service dans un component, ajoutez un argument au constructor du component qui a le type du service, 
//par exemple private userService: UserService
export class PostService {
    posts: Post[] = [
        { //inicialiser simplement avec un object et les propriétés requises
            id: 1,
            title: 'Mon premier post',
            description: 'Moi',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            like: 200,
            location: 'Lyon'
        },
        { //inicialiser simplement avec un object et les propriétés requises
            id: 2,
            title: 'Mon 2eme post',
            description: 'Moi et moi',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            like: 0,
            //
        },
        { //inicialiser simplement avec un object et les propriétés requises
            id: 3,
            title: 'Mon premier post',
            description: 'Moi',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            like: 1,
            location: 'Lyon'
        },
        { //inicialiser simplement avec un object et les propriétés requises
            id: 4,
            title: 'Mon 2eme post',
            description: 'Moi et moi',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createdDate: new Date(),
            like: 0,
            //
        },
    ];

    getAllPost(): Post[] {//methode pour retourner le tableau
        return this.posts;
    }

    getOnePostById(postId: number): Post {
        //on recupere un post où son id est strictement egal au postId
        const post = this.posts.find(post => post.id === postId);
        if (!post) {
            throw new Error('Post not found!');
        } else {
            return post;
        }
    }

    postById(postId: number, postType: 'like' | 'unLike'): void {
        const post = this.getOnePostById(postId);
        postType === 'like' ? post.like++ : post.like--; //literal types
    }

    addPost(formValue: {title: string, description: string, imageUrl: string, location?: string}): void {
        const post: Post = {
            ...formValue,
            createdDate: new Date(),
            like: 0,
            id: this.posts[this.posts.length - 1].id + 1
        };
        this.posts.push(post);
    }

}