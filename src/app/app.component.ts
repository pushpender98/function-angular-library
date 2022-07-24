import { Component } from '@angular/core';
import { FuntionsService } from 'dist';

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "common-input-component";

	constructor(private abc: FuntionsService) {}

	beep() {
		debugger;
		console.log("beep");
	}
}
