import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
	selector: 'app-navbar',
	imports: [NgClass, NgIf],
	templateUrl: './navbar.html',
	styleUrl: './navbar.css',
})

export class NavbarComponent {
	@Output() nav_inicio = new EventEmitter<void>();
	@Output() nav_historial = new EventEmitter<void>();
	@Output() nav_historial_admin = new EventEmitter<void>();
	@Output() nav_reporte = new EventEmitter<void>();
	@Output() nav_perfil = new EventEmitter<void>();
	@Output() nav_perfiles_admin = new EventEmitter<void>();
	@Input() admin!: boolean;

	go_inicio() { this.nav_inicio.emit(); }
	go_historial() { this.nav_historial.emit(); }
	go_historiales_admin() { this.nav_historial_admin.emit() }
	go_reporte() { this.nav_reporte.emit(); }
	go_perfil() { this.nav_perfil.emit(); }
	go_perfiles_admin() { this.nav_perfiles_admin.emit() }
}
