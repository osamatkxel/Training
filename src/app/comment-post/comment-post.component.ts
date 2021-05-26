import { Component, OnInit } from '@angular/core';
import { Post } from 'src/types/post';
import { BrowserModule } from '@angular/platform-browser';
import { APIService } from '../API.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-post',
  templateUrl: './comment-post.component.html',
  styleUrls: ['./comment-post.component.scss'],
})
export class CommentPostComponent implements OnInit {
  public createForm: FormGroup;
  posts: Array<Post>;
  comments: Array<Comment>;
  constructor(private api: APIService, private fb: FormBuilder) {
    this.posts = [];
    this.comments = [];
    this.createForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
    });
  }

  async ngOnInit() {
    console.log('Post-Comment');
    this.createForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
    });
    const allPosts = await this.api.ListPosts();
    this.posts = allPosts.items as unknown as Post[];
  }

  onCreate(post: Post) {
    post.numberOfComments = 0;
    console.log(post);
    this.api
      .CreatePost(post)
      .then((event) => {
        console.log('Post Added');
        this.createForm?.reset();
        this.posts.splice(0, 0, post);
      })
      .catch((e) => {
        console.log('error creating post...', e);
      });
  }
}
