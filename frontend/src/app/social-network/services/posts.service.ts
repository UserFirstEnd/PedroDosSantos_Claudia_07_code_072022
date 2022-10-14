import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Post } from "../models/post.model";
import { environment } from "src/environments/environment";

@Injectable()
export class PostsService {
    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${environment.apiUrl}/posts`);//à revoir sur la premiere partie episode 3
    }

    getPostById(id: string): Observable<Post> {
        console.log(id)
        return this.http.get<Post>(`${environment.apiUrl}, ${id}`);
    }

    addPost(post: Post, image: File) {
        const formData = new FormData();
        formData.append('post', JSON.stringify(post)),
        formData.append('image', image);
        return this.http.post(`${environment.apiUrl}'/posts'`, formData);
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
}