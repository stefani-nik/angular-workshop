import { Component, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-images-table',
  templateUrl: './images-table.component.html',
  styleUrls: ['./images-table.component.css']
})
export class ImagesTableComponent implements OnChanges {
  @Input() albumId: Number;

  images: Array<any>;
  loading: Boolean = false;

  // TODO - 1: Inject the newly implemented HttpService in the constructor of the class
  constructor(private httpClient: HttpClient) { }

  ngOnChanges() {
    if (this.albumId) {
      this.loading = true;
      this.getImages(this.albumId);
    }
  }

  getImages(albumId: Number) {
    // TODO - 2: Replace the call to the REST Api with the function you implemented in the HttpService
    this.httpClient.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .subscribe((data: any) => {
        this.images = data;
        this.loading = false;
      }, (error: any) => {
        console.log(error);
        this.loading = false;
      });
  }
}