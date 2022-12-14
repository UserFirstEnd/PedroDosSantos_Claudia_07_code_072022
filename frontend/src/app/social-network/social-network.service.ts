import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { catchError, map, Observable, of, Subject, tap, throwError } from "rxjs";
import { Post } from "./models/post.model";
import { environment } from "src/environments/environment";
import { UserIdService } from "../auth-form/user/user.service";

@Injectable()
export class PostsService {

    posts$ = new Subject<Post[]>();

    constructor(private http: HttpClient,
        private userIdService: UserIdService) { }

    getPosts() {
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`).pipe(
            tap(posts => this.posts$.next(posts)),
            catchError(error => {
              console.error(error.error.message);
              return of([]);
            })
          ).subscribe();
    }

    getPostById(id: string): Observable<Post> {
        return this.http.get<Post>(`${environment.apiUrl}/posts/${id}/`);
    }

    addPost(post: Post, image: File) {
        const formData = new FormData();
        formData.append('post', JSON.stringify(post)),
        formData.append('image', image);
        return this.http.post(`${environment.apiUrl}/posts`, formData);
    }

    modifyPost(id: string, post: Post, image: string | File) {
        const userRole = this.userIdService.getRole();
        if (userRole != 'Admin') {
            if (typeof image === 'string') {
                return this.http.put<{ message: string }>(`http://localhost:3000/api/posts/${id}`, post);
            } else {
                const formData = new FormData();
                formData.append('post', JSON.stringify(post));
                formData.append('image', image);
                return this.http.put<{ message: string }>(`http://localhost:3000/api/posts/${id}`, formData);
            }
        } else {
            if (typeof image === 'string') {
                return this.http.put<{ message: string }>(`http://localhost:3000/api/posts/admin/${id}`, post);
            } else {
                const formData = new FormData();
                formData.append('post', JSON.stringify(post));
                formData.append('image', image);
                return this.http.put<{ message: string }>(`http://localhost:3000/api/posts/admin/${id}`, formData);
            }
        }
    }

    deletePost(id: string) {
        return this.http.delete<{ message: string }>(`http://localhost:3000/api/posts/${id}`).pipe(
            catchError(Error => throwError(() => new Error('test')))
        );
    }

    likePost(id: string, like: boolean) {
        return this.http.post<{ message: string }>(
            `${environment.apiUrl}/posts/` + id + '/like',
            { userId: this.userIdService.getUserId(), like: like ? 1 : 0 }
        ).pipe(
            map(like => like),
            catchError(Error => throwError(() => new Error('test')))
        )
    }
}