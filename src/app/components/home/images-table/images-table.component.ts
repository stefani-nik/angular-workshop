import { Component, Input, OnChanges } from '@angular/core';
// TODO - 1: Import HttpClient from '@angular/common/http'

@Component({
  selector: 'app-images-table',
  templateUrl: './images-table.component.html',
  styleUrls: ['./images-table.component.css']
})
export class ImagesTableComponent implements OnChanges {
  @Input() albumId: Number;

  images: Array<any>;

  // TODO - 2: Inject HttpClient in the constructor
  constructor() { }

  ngOnChanges() {
    // TODO - 4: Call the function you created passing as a parameter the albumId to get the images for the currently selected album
    // Note: Check if albumId is defined before calling the function
  }

  // TODO - 3: Implement a function in which you should:
  // 3.1. Set loading variable to true before the request is made
  // 3.2. Use the HttpClient to make a GET request for the images with the following URL:
  // 'https://jsonplaceholder.typicode.com/photos?albumId=${albumId}'
  // 3.3. Subscribe to the response.
  // 3.4. In case of success, assing the received data to the images array and set the loading flag to false.
  // 3.5. In case of an error, log the error and set the loading flag to false.
}