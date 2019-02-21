import { Component, Output, EventEmitter } from '@angular/core';
import { Albums } from './albums';

@Component({
  selector: 'app-albums-table',
  templateUrl: './albums-table.component.html',
  styleUrls: ['./albums-table.component.css']
})
export class AlbumsTableComponent {
  showAlbumTitles: Boolean = true;
  albums: Array<any> = Albums;

  // TODO - 2: Define an event emitter using the Output annotation
  // in order to notify the home component when the 'Show Images' button has been clicked.
  // The event emitter will emit the selected album id.

  constructor() { }

  toggleAlbumTitles() {
    this.showAlbumTitles = !this.showAlbumTitles;
  }

  // TODO - 3: Implement the function which will trigger the event emitter after the click of the 'Show Images' button.
  // Call this function on click of the button in the template - ref. TODO - 1
}