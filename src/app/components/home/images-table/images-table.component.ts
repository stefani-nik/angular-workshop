import { Component, Input, OnChanges } from '@angular/core';
import { Images } from './images';

@Component({
  selector: 'app-images-table',
  templateUrl: './images-table.component.html',
  styleUrls: ['./images-table.component.css']
})
export class ImagesTableComponent implements OnChanges {
  // TODO - 1: Define a variable using the Input annotation
  // in order to store the accepted album id value from the Home Component.
 
  // TODO - 2: Define a variable which will store the filtered images.

  images: Array<any> = Images;

  constructor() { }

  // TODO - 3: Use the ngOnChanges lifecycle hook to assign value to the filtered images variable.
  ngOnChanges() {
    // TODO - 4: Get the images which have album id the same as the selected one and asign them to the defined variable.
  }
}