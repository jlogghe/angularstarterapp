import { Component } from "@angular/core";
import { Joke } from "./models/Joke";

@Component({
    selector: 'joke-list',
    templateUrl: './joke-list.component.html'
})

export class JokeListComponent {
    jokes: Joke[];

    constructor() {
        this.jokes = [
            new Joke('Hello', 'World'),
            new Joke('Hello World', 'From another world'),
            new Joke('Hello Mars', 'From Jupiter')
        ]
    }

    addJoke(joke) {
        this.jokes.unshift(joke);
    }

    deleteJoke(joke) {
        let indexOfJoke = this.jokes.indexOf(joke);

        if(indexOfJoke !== -1) {
            this.jokes.splice(indexOfJoke, 1);
        }
    }
}