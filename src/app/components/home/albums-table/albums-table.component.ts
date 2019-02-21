import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-albums-table',
  templateUrl: './albums-table.component.html',
  styleUrls: ['./albums-table.component.css']
})
export class AlbumsTableComponent implements OnInit {
  showAlbumTitles: Boolean = true;
  albums: Array<any>;
  @Output() showAlbumImagesEvent: EventEmitter<Number> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.initAlbums();
  }

  initAlbums() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/albums')
      .subscribe((data: any) => {
        this.albums = data;
      }, (error: any) => {
        console.log(error);
      });
  }

  toggleAlbumTitles() {
    this.showAlbumTitles = !this.showAlbumTitles;
  }

  showAlbumImages(albumId: Number) {
    this.showAlbumImagesEvent.emit(albumId);
  }
}