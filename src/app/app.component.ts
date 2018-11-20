import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private postService: PostService) {
    const config = {
      apiKey: 'AIzaSyC-HSuqRcgSUYqonuZI6Vy_8UB2aDbh0q4',
      authDomain: 'openclassrooms-activity-2.firebaseapp.com',
      databaseURL: 'https://openclassrooms-activity-2.firebaseio.com',
      projectId: 'openclassrooms-activity-2',
      storageBucket: 'openclassrooms-activity-2.appspot.com',
      messagingSenderId: '486797433044'
    };
    firebase.initializeApp(config);
  }
}
