import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: any) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
  }
  deletePosts(id: any) {
    //id = 300;
    return this.http.delete(this.url + '/' + id)
    // .pipe(
    //   catchError(err => {
    //     throw 'error in source. Details: ' + err;
    //   })
    // );
  }
}
