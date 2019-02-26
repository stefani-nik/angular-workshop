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

  // TODO - 1: Inject the newly implemented HttpService in the constructor of the class
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.initAlbums();
  }

  initAlbums() {
    // TODO - 2: Replace the call to the REST Api with the function you implemented in the HttpService
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