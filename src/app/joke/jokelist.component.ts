import { Component } from '@angular/core';
import {Joke} from './models/joke';

@Component({
    selector: 'joke-list',
    templateUrl: './jokelist.component.html'
})
export class JokeListComponent{
    jokes: Joke[];

    constructor() {
        this.jokes = [
            new Joke("What did the cheese say when it looked in the mirror?", "Hello-Me"),
            new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony"),
            new Joke("A kid threw a lump of cheddar at me", "I thought 'That's not very mature'")
        ];
    }
}