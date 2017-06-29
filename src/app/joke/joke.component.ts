import { Component } from '@angular/core';

@Component({
  selector: 'joke',
  template: `
    <h3>{{setup}}</h3>
    <p>{{punchline}}</p>
  `
})
export class JokeComponent{
  setup: string;
  punchline: string;

  constructor() {
    this.setup = "What did the cheese say when it looked in the mirror?";
    this.punchline = "Halloumi";
  }
}