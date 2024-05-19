import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CalendrierComponent } from "../../calendrier/calendrier.component";
import { Post } from '../../../classes/post';
import { PostService } from '../../../services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-fyp',
    standalone: true,
    templateUrl: './fyp.component.html',
    styleUrl: './fyp.component.css',
    imports: [HeaderComponent, CalendrierComponent, HttpClientModule ,CommonModule],
    providers: [
      PostService
    ]
})
export class FypComponent implements OnInit{
  posts: Post[] = [];
  newPostContent: string = '';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  addNewPost(): void {
    if (this.newPostContent.trim() !== '') {
      const newPost: Post = {
        contenu: this.newPostContent,
        published: new Date(),
        likes: [],
        comments: []
      };

      this.postService.addPost(newPost).subscribe((post: Post) => {
        this.fetchPosts(); // Refresh the posts after adding a new one
        this.newPostContent = ''; // Clear the input field
      });
    }
  }
}

