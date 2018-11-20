import { Injectable, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() { }

  ngOnInit() {
    this.getPosts();
  }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value',
        (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      )
    ;
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const indexToRemove = this.posts.findIndex(
      (toFind) => {
        if (toFind === post) {
          return true;
        }
      }
    );
    this.posts.splice(indexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
