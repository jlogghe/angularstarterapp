import { Component } from "@angular/core";

@Component({
    selector: 'joke-list',
    templateUrl: './joke-list.component.html'
})

export class JokeListComponent {
    jokes: Object[];

    constructor() {
        this.jokes = [
            {
                setup: 'Hello',
                punchline: 'World'
            },
            {
                setup: 'Hello World',
                punchline: 'From another world'
            },
            {
                setup: 'Hello Mars',
                punchline: 'From Jupiter'
            }
        ]
    }
}