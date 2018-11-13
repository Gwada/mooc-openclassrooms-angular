import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    new Post('Mon premier post', 'contenu du premier post'),
    new Post('Mon deuxième post', 'contenu du deuxième post'),
    new Post('Encore un post', 'contenu du troisième post')
  ];
}
