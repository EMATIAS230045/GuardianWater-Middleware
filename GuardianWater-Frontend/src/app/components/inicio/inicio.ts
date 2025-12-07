import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-inicio',
	imports: [NgClass],
	templateUrl: './inicio.html',
	styleUrl: './inicio.css',
})
export class InicioComponent {
	@Input() admin! : boolean;
}
