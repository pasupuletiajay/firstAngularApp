import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private service: PostService) {

  }
  ngOnInit(): void {
    this.service.getPosts()
      .subscribe({
        next: response => {
          //console.log(response);
          this.posts = response;
        }
      });
  }
  createPost(input: HTMLInputElement) {
    let post = { title: input.value, id: 0 };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.createPost(post)
      .subscribe({
        next: response => {
          let x = JSON.stringify(response);
          let y = JSON.parse(x);
          post.id = y.id;

          //console.log(y.id);
        },
        error: (error: Response) => {
          this.posts.splice(0, 1);
          if (error.status === 400) {
            //this.form.setErrors(error.json());
            alert('Bad request.');
          }
          else {
            // alert('An unexpected error occured');
            // console.log(error);
            throw error;
          }
        }
      });
  }

  updatePost(post: any) {
    this.service.updatePost(post)
      .subscribe({
        next: (response: any) => {
          console.log(response);
        }
      });
  }

  deletePost(post: any) {
    //console.log(post.id);
    let id = post.id;
    this.service.deletePosts(id)
      .subscribe({
        next: response => {
          let idx = this.posts.indexOf(post);
          this.posts.splice(idx, 1);
        },
        error: (error: Response) => {
          if (error.status === 404) {//Not Found error
            alert('This post is already been deleted.');
          }
          else {
            // alert('An unexpected error occured');
            // console.log(error);
            throw error;
          }
        }

      });
  }

}
