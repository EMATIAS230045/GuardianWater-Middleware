import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-crear-reporte',
	imports: [NgClass, NgIf],
	templateUrl: './crear-reporte.html',
	styleUrl: './crear-reporte.css',
})
export class CrearReporteComponent {
	constructor(private router: Router) {}
	@Output() go_back = new EventEmitter<void>();
	@Input() admin!: boolean;

	create_report() { 
		/*back*/
		this.goback();
	 }
	goback() {
		this.go_back.emit();
		this.router.navigate(['/inicio']);
	}
}
