import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-footer',
	imports: [NgClass],
	templateUrl: './footer.html',
	styleUrl: './footer.css',
})
export class FooterComponent {
	constructor(private router: Router) {}
	@Output() cerrar = new EventEmitter<void>();
	@Input() admin!: boolean;

	go_cerrar() {
		this.cerrar.emit();
		this.router.navigate(['/login']);
	}
}
