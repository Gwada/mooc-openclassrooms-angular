import { Injectable, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {

  posts = [
    new Post('Mon premier post', 'contenu du premier post'),
    new Post('Mon deuxième post', 'contenu du deuxième post'),
    new Post('Encore un post', 'contenu du troisième post')
  ];
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

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database()
          .ref(`/posts/${id}`)
          .once('value').then(
            (data) => {
              resolve(data.val());
            }, (error) => {
              reject(error);
            }
          )
        ;
      }
    );
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
  }
}
