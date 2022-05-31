import { Component } from '@angular/core';
import bundeslaenderData from './bundesland.json';

interface bundesland {
  name: Number;
  population: String;
  url: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  bundeslaender = bundeslaenderData;

  constructor() {
    console.log(this.bundeslaender);
  }
}
