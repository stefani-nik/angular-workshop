import { Component, Input, OnChanges } from '@angular/core';

import { HttpService } from './../../../services/http.service';

@Component({
  selector: 'app-images-table',
  templateUrl: './images-table.component.html',
  styleUrls: ['./images-table.component.css']
})
export class ImagesTableComponent implements OnChanges {
  @Input() albumId: Number;

  images: Array<any>;
  loading: Boolean = false;

  constructor(private httpService: HttpService) { }

  ngOnChanges() {
    if (this.albumId) {
      this.loading = true;
      this.getImages(this.albumId);
    }
  }

  getImages(albumId: Number) {
    this.httpService.getImages(albumId)
      .subscribe((data: any) => {
        this.images = data;
        this.loading = false;
      }, (error: any) => {
        console.log(error);
        this.loading = false;
      });
  }
}