import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { HttpService } from './../../../services/http.service';

@Component({
  selector: 'app-albums-table',
  templateUrl: './albums-table.component.html',
  styleUrls: ['./albums-table.component.css']
})
export class AlbumsTableComponent implements OnInit {
  showAlbumTitles: Boolean = true;
  albums: Array<any>;
  @Output() showAlbumImagesEvent: EventEmitter<Number> = new EventEmitter();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.initAlbums();
  }

  initAlbums() {
    this.httpService.getAlbums()
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