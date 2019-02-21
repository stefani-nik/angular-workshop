import { Component, Input, OnChanges } from '@angular/core';
import { Images } from './images';

@Component({
  selector: 'app-images-table',
  templateUrl: './images-table.component.html',
  styleUrls: ['./images-table.component.css']
})
export class ImagesTableComponent implements OnChanges {
  @Input() albumId: Number;

  filteredImages: any;
  images: Array<any> = Images;

  constructor() { }

  ngOnChanges() {
    if(this.albumId) {
      this.filteredImages = this.images.filter(image => image.albumId == this.albumId);
    }
  }
}