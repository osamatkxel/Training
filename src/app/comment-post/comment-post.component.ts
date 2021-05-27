// import { Comment } from './../API.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/types/post';
import { Comment } from 'src/types/comment';
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

  text: string = '';
  @ViewChild('cmt', { static: false }) input?: ElementRef;
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

    //Form builder
    this.createForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
    });

    //Fetching all posts when page loads
    const allPosts = await this.api.ListPosts();
    this.posts = allPosts.items as unknown as Post[];

    //Fetching all comments
    for (let p of this.posts) {
      this.api.GetPost(p.id as string).then((event: any) => {
        let i = this.posts.indexOf(p);
        (this.posts[i].comments as unknown as Comment[]) =
          event.comments?.items;
        this.comments = event.comments?.items;
      });
    }

    //Subscribing to the CreatePost Listner
    this.api.OnCreatePostListener.subscribe((event: any) => {
      const newPost = event.value.data.onCreatePost;
      this.posts = [newPost, ...this.posts];
      console.log(event);
    });
  }

  onCreate(post: Post) {
    post.numberOfComments = 0;
    console.log(post);
    this.api
      .CreatePost(post)
      .then((event) => {
        console.log('Post Added');
        this.createForm?.reset();
        //this.posts.splice(0, 0, post);
      })
      .catch((e) => {
        console.log('error creating post...', e);
      });
  }

  delPost(post: Post) {
    let p = {
      id: post.id,
    };
    this.api.DeletePost(p as Post).then((event) => {
      console.log('Post Deleted');
      let i = this.posts.indexOf(post);
      this.posts.splice(i, 1);
    });
  }

  //Comments
  onCreateComment(event: any, p: Post) {
    console.log(event.target.cmt.value);
    //Getting value
    //Making Comment
    let cmt: Comment = {
      id: '21',
      postID: p.id,
      content: event.target.cmt.value,
    };
    //console.log(cmt);
    // console.log(p);
    //Calling CreateComment Mutation
    this.api.CreateComment(cmt).then((event) => {
      console.log('Commented');
    });
    event.target.cmt.value = '';
  }
}
