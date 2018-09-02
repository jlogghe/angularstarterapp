import { Component, Output, EventEmitter } from "@angular/core";
import { Joke } from "./models/Joke";

@Component({
    selector: 'joke-form',
    templateUrl: './joke-form.component.html'
})

export class JokeFormComponent {
    @Output() jokeCreated = new EventEmitter<Joke>();

    createJoke(setup: string, punchline: string) {
        this.jokeCreated.emit(
            new Joke(setup, punchline)
        );
    }
}