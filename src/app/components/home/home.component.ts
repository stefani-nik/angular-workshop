import { Component } from '@angular/core';
import { Albums } from './albums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // TODO - 6: Add boolean flag here for toggling the album titles column in the table.
  albums: Array<any> = Albums;

  constructor() { }

  // TODO - 7: Add a function here to toggle the boolean flag value.
}
