import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
  }

  onAddLike() {
    ++this.post.loveIts;
    this.postService.savePosts();
    this.postService.emitPosts();
  }

  onRemoveLike() {
    --this.post.loveIts;
    this.postService.savePosts();
    this.postService.emitPosts();
  }

  getLoveIts() {
    return this.post.loveIts;
  }

  onRemovePost() {
    this.postService.removePost(this.post);
  }
}
