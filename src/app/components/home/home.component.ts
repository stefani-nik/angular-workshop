import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  albumId: Number;

  constructor() { }

  onShowAlbumImages(albumId: Number) {
    this.albumId = albumId;
  }
}