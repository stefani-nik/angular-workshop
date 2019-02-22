import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // TODO - 2: Define a variable which will store the value of the currently selected album id.

  constructor() { }

  // TODO - 3: Implement a function which is subscribed to the event emitter from the Albums Table Component
  // and accepts the emitted album id. This function is the one that is called from the template.
  // In the function assign the accepted value to the defined variable.
}
