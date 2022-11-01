import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { catchError, mapTo, Observable, Subject, throwError } from "rxjs";
import { Post } from "./models/post.model";
import { environment } from "src/environments/environment";
import { token } from "../auth-form/token/token";
import { AuthServiceService } from "../auth-form/auth-service.service";
import { UserIdService } from "../auth-form/userId/userId.service";

@Injectable()
export class PostsService {

    token!: token;

    constructor(private http: HttpClient,
        private userIdService: UserIdService) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`);//à revoir sur la premiere partie episode 3
    }

    getPostById(id: string): Observable<Post> {
        console.log(`${id}`)
        return this.http.get<Post>(`${environment.apiUrl}/posts/${id}`);
    }

    addPost(post: Post, image: File) {
        const formData = new FormData();
        formData.append('post', JSON.stringify(post)),
            console.log(post)
        console.log(formData)
        formData.append('image', image);
        return this.http.post(`${environment.apiUrl}/posts`, formData);
    }

    modifyPost(id: string, post: Post, image: string | File) {
        if (typeof image === 'string') {
            return this.http.put<{ message: string }>(`http://localhost:3000/api/posts/${id}`, post);
        } else {
            const formData = new FormData();
            formData.append('post', JSON.stringify(post));
            formData.append('image', image);
            return this.http.put<{ message: string }>(`http://localhost:3000/api/posts/${id}`, formData);
        }
    }

    deletePost(id: string) {
        return this.http.delete<{ message: string }>(`http://localhost:3000/api/posts/${id}`).pipe(
            catchError(error => throwError(error.error.message))
        );
    }

    likePost(id: string, like: boolean) {
        return this.http.post<{ message: string }>(
            `${environment.apiUrl}/posts/` + id + '/like',
            { userId: this.userIdService.getUserId(), like: like ? 1 : 0 }
        ).pipe(
            mapTo(like),
            catchError(error => throwError(error.error.message))
        );
    }

    dislikePost(id: string, dislike: boolean) {
        return this.http.post<{ message: string }>(
            `${environment.apiUrl}/posts/` + id + '/like',
            { userId: this.userIdService.getUserId(), dislike: dislike ? -1 : 0 }
        ).pipe(
            mapTo(dislike),
            catchError(error => throwError(error.error.message))
        );
    }
}