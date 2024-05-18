import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../classes/post';
const baseUrl = 'http://localhost:8000/posts';
@Injectable({
  providedIn: 'root'
})

export class PostService {
  
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    // Add JWT token to request headers
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Post[]>(baseUrl, { headers });
  }
  addPost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(baseUrl, newPost);

  }
  getPostById(PostId: number):Observable<Post>{
    return this.http.get<Post>(`${baseUrl}/${PostId}`);
  }
  UpdatePost(id: number, data: any): Observable<Post> {
    return this.http.put<Post>(baseUrl + "/" + id, data);
  }
  
  deletePost(idPost:Number):Observable<Post>{
    return this.http.delete<Post>(baseUrl + "/" + idPost);
  }
  
}
