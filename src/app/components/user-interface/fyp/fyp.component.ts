import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CalendrierComponent } from "../../calendrier/calendrier.component";
import { Post } from '../../../classes/post';
import { PostService } from '../../../services/post.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-fyp',
    standalone: true,
    templateUrl: './fyp.component.html',
    styleUrl: './fyp.component.css',
    imports: [HeaderComponent, CalendrierComponent, HttpClientModule ],
    providers: [
      PostService
    ]
})
export class FypComponent implements OnInit{
  posts: Post[] = [];

  constructor(private postService: PostService) { }
  
  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  addPost(description: string): void {
    const newPost: Post = {
      contenu: description,
      published: new Date(),
      likes: [],
      comments: []
    };

    this.postService.addPost(newPost).subscribe((post: Post) => {
      this.fetchPosts();
    });
  }
}

