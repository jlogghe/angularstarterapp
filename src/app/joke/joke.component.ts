import { Component } from "@angular/core";

@Component({
    selector: 'joke',
    templateUrl: './joke.component.html',
})

export class JokeComponent {
    setup: string;
    punchline: string;

    constructor() {
        this.setup = 'Hello';
        this.punchline = 'World';
    }
}