import { catchError } from 'rxjs/operators';
import { Component, Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
@Component({
  selector: 'http-practice',
  templateUrl: './http-practice.component.html',
  styleUrls: ['./http-practice.component.scss']
})
export class HttpPracticeComponent  {

  posts: any[] = [];
  private url = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) { 
    http.get(this.url)
  //   .pipe(
  //     catchError(err => {
  //         console.log('Handling error locally and rethrowing it...');
  //         return throwError('Error occuered');
  //     })
  // ) 
    .subscribe(response => {
      this.posts = (response as any);
      //let re = JSON.stringify(response)
      //console.log(this.posts[0]['title']);
    })
  }
  
  createPost(input: HTMLInputElement) {
    let post : any= {
      title: input.value
    }
    this.posts.splice(0,0,post);
    input.value = '';
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      console.log(response);
      post['id'] = (response as any).id;
      //this.posts.push(post);//this will append the post in the last of the array, so we will use splice to add it in the beginning
      //console.log(post);
    }, error => {
      this.posts.splice(0,1);
    }
    )
  }

  updatePost(post: any) {
    //this.http.patch(this.url+ post.id, JSON.stringify({isRead: true}))
    post.title = 'Updated';
    this.http.put(this.url+post.id, JSON.stringify(post))
      .subscribe(response => {
        console.log(response);
      },
      (error: Response) => {
        if(error.status === 404) {
          alert('This post is already been deleted');
        } else if(error.status === 400) {
          alert('Bad request');
        }
      })
  }

  deletePost(post: any) {
    this.http.delete(this.url+post.id)
      .subscribe(
        response => {
          console.log(response);
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if(error.status === 404) {
            alert('This post is already been deleted');
          } else if(error.status === 400) {
            alert('Bad request');
          }
        })
  }
}
