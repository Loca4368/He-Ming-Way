import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'navigator',
    templateUrl: './navigator.component.html',
    styleUrls: ['./navigator.component.css']
})


export class NavigatorComponent {

    title: String;

    constructor() {

        this.title = "Ming Way";
    }

    ngOnInit() {

    }

}
