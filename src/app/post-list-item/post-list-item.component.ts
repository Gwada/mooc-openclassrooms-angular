import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  addLike() {
    this.post.addLoveIts();
    console.log(this.post.getLoveIts());
  }

  removeLike() {
    this.post.removeLoveIts();
    console.log(this.post.getLoveIts());
  }

  getLoveIts() {
    return this.post.getLoveIts();
  }
}
