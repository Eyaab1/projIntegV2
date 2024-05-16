import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../classes/post';
const baseUrl = '';
@Injectable({
  providedIn: 'root'
})

export class PostService {
  
  constructor(private http: HttpClient) {
    
  }
  
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`${baseUrl}`);

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
