import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() {
    const config = {
      apiKey: 'AIzaSyApgChuzZ7QmXQh1iojKeurbWsUnGYiSLg',
      authDomain: 'bookshelves-cf3b1.firebaseapp.com',
      databaseURL: 'https://bookshelves-cf3b1.firebaseio.com',
      projectId: 'bookshelves-cf3b1',
      storageBucket: 'bookshelves-cf3b1.appspot.com',
      messagingSenderId: '349381707022'
    };
    firebase.initializeApp(config);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
