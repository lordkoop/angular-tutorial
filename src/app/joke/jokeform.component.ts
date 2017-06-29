import { Component, Output, EventEmitter } from "@angular/core";
import { Joke } from "app/joke/models/joke";

@Component({
    selector: 'joke-form',
    templateUrl: './jokeform.component.html'
})
export class JokeFormComponent{
    @Output() jokeCreated = new EventEmitter<Joke>();

    createJoke(setup: string, punchline: string){
        this.jokeCreated.emit(new Joke(setup, punchline));
    }
}