import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Joke } from "./models/Joke";

@Component({
    selector: 'joke',
    templateUrl: './joke.component.html',
})

export class JokeComponent {
    @Input() joke: Joke;
    @Output() jokeDeleted = new EventEmitter<Joke>();

    deleteJoke() {
        this.jokeDeleted.emit(this.joke);
    }
}