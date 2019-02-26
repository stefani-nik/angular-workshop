import { HttpService } from './../../../services/http.service';

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-images-table',
  templateUrl: './images-table.component.html',
  styleUrls: ['./images-table.component.css']
})
export class ImagesTableComponent implements OnInit, OnChanges {
  @Input() albumId: Number;

  images: Array<any>;
  loading: Boolean = false;

  addImageForm: FormGroup;
  isSubmitted = false;

  constructor(private httpService: HttpService, private fb: FormBuilder) { }

  ngOnInit() {
    this.addImageForm = this.initFormGroup();
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

  initFormGroup() {
    return this.fb.group({
      title: ['', [ Validators.required, Validators.minLength(10) ]],
      url: ['', [ Validators.required ]]
    });
  }

  addImage() {
    this.isSubmitted = true;
    if(this.addImageForm.valid) {
      this.httpService.addImage(this.addImageForm.value)
      .subscribe((data: any) => {
        console.log(data);
      }, (error: any) => {
        console.log(error);
      });
    }
  }
}