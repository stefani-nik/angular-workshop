import { Component } from '@angular/core';
import { Albums } from './albums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showAlbumTitles: Boolean = true;
  albums: Array<any> = Albums;

  constructor() { }

  toggleAlbumTitles() {
    this.showAlbumTitles = !this.showAlbumTitles;
  }
}