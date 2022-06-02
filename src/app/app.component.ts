import { Component } from '@angular/core';
import bundeslaenderData from './bundesland.json';

interface bundesland {
  name: Number;
  population: String;
  url: String;
}

let bundeslaender = [];
let letters = [];

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

  render(filter) {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < bundeslaender.length; i++) {
      const land = bundeslaender[i];
      const population = (land['population'] + '').replace('.', ',');
      const firstLetter = land['name'].charAt(0);

      if (!filter || filter == firstLetter) {
        content.innerHTML += generateLink(land, population);
      }

      if (!letters.includes(firstLetter)) {
        letters.push(firstLetter);
      }
    }

    renderLetters();
  }

  setFilter(letter) {
    render(letter);
  }

  renderLetters() {
    let letterbox = document.getElementById('letterbox');
    letterbox.innerHTML = '';

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      letterbox.innerHTML += `<div onclick="setFilter('${letter}')" class="letter">${letter}</div>`;
    }
  }

  generateLink(land, population) {
    return `<a class="bbox" href="${land['url']}" target="_blank">
    <div>${land['name']}</div>
    <div class="text-gray">${population} Millionen</div>
</a>`;
  }
}
