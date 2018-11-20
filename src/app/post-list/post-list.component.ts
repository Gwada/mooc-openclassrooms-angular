import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  postSubScription: Subscription;

  constructor(private postsService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.postSubScription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onCreateNewPost() {
    this.router.navigate(['new']);
  }

  ngOnDestroy() {
    this.postSubScription.unsubscribe();
  }

}
