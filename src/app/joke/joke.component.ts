import { Component, Input } from '@angular/core';
import { Joke } from "app/joke/models/joke";

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html'
})
export class JokeComponent{
  @Input('joke') joke: Joke;
}