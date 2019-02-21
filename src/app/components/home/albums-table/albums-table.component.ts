import { Component, Output, EventEmitter, OnInit } from '@angular/core';
// TODO - 1: Import HttpClient from '@angular/common/http'

@Component({
  selector: 'app-albums-table',
  templateUrl: './albums-table.component.html',
  styleUrls: ['./albums-table.component.css']
})
export class AlbumsTableComponent implements OnInit {
  showAlbumTitles: Boolean = true;
  albums: Array<any>;
  @Output() showAlbumImagesEvent: EventEmitter<Number> = new EventEmitter();

  // TODO - 2: Inject HttpClient in the constructor
  constructor() { }

  ngOnInit() {
    // TODO - 4: Call the function you created for initializing the albums
  }

  // TODO - 3: Implement a function in which you should:
  // 3.1. Use the HttpClient to make a GET request for the albums with the following URL:'https://jsonplaceholder.typicode.com/albums'
  // 3.2. Subscribe to the response.
  // 3.3. In case of success, assign the received data to the albums array.
  // 3.4. In case of an error, log the error.

  toggleAlbumTitles() {
    this.showAlbumTitles = !this.showAlbumTitles;
  }

  showAlbumImages(albumId: Number) {
    this.showAlbumImagesEvent.emit(albumId);
  }
}