import { Component, Output, EventEmitter } from '@angular/core';
import { Albums } from './albums';

@Component({
  selector: 'app-albums-table',
  templateUrl: './albums-table.component.html',
  styleUrls: ['./albums-table.component.css']
})
export class AlbumsTableComponent {
  showAlbumTitles: Boolean = true;
  albums: Array<any> = Albums;
  @Output() showAlbumImagesEvent: EventEmitter<Number> = new EventEmitter();

  constructor() { }

  toggleAlbumTitles() {
    this.showAlbumTitles = !this.showAlbumTitles;
  }

  showAlbumImages(albumId: Number) {
    this.showAlbumImagesEvent.emit(albumId);
  }
}