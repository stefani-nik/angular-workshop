import { HttpService } from './../../../services/http.service';

import { Component, Input, OnChanges, OnInit } from '@angular/core';
// TODO - 1: Import FormBuilder, FormGroup and Validators from '@angular/forms'.

@Component({
  selector: 'app-images-table',
  templateUrl: './images-table.component.html',
  styleUrls: ['./images-table.component.css']
})
export class ImagesTableComponent implements OnInit, OnChanges {
  @Input() albumId: Number;

  images: Array<any>;
  loading: Boolean = false;

  // TODO - 2: Declare addImageForm variable of type FormGroup.
  isSubmitted = false;

  // TODO - 3: Inject FormBuilder in the constructor.
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // TODO - 4: Initialize addImageForm using the injected form builder. 
    //           4.1. Add form controls for title and url.
    //           4.2. Use the built-in validators to make sure the title and url are required and the title minimum length is 10 characters.
  }

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

  // TODO - 5: Implement a function for adding images in which you should:
  //           5.1. Set isSubmitted variable to true. 
  //           5.2. If the form is valid - use the httpService.addImage method and pass addImageForm.value as parameter to make a POST request.
  //           5.3. Subscribe to the response. 
  //           5.4. In case of success, log the received data.
  //           5.5. In case of an error, log the error.
}