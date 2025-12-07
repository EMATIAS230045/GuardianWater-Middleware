import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContainerComponent } from './components/main-container/main-container';
import { LoginComponent } from './components/login/login';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		LoginComponent,
		MainContainerComponent,
	],
	templateUrl: './app.html',
	styleUrl: './app.css'
})
export class App {
	protected readonly title = signal('GuardianWater');
	start: boolean = false;

	alternarFondo() {
		this.start = !this.start;
	}
}
