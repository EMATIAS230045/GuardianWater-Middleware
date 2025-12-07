import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar';
import { FooterComponent } from '../footer/footer';
import { InicioComponent } from '../inicio/inicio';
import { HistorialComponent } from '../historial/historial';
import { HistorialAdminComponent } from '../historial-admin/historial-admin';
import { CrearReporteComponent } from '../crear-reporte/crear-reporte';
import { PerfilesAdminComponent } from '../perfiles-admin/perfiles-admin';
import { PerfilComponent } from '../perfil/perfil';

@Component({
	selector: 'app-main-container',
	imports: [
		NavbarComponent,
		FooterComponent,
		InicioComponent,
		HistorialComponent,
		HistorialAdminComponent,
		CrearReporteComponent,
		PerfilesAdminComponent,
		PerfilComponent
	],
	templateUrl: './main-container.html',
	styleUrl: './main-container.css',
})

export class MainContainerComponent {
	constructor (private router: Router) {}
	@Output() cerrarSesionA = new EventEmitter<void>();
	C_Inicio : boolean = true;
	C_Historial : boolean = false;
	C_Historial_Admin : boolean = false;
	C_Reporte : boolean = false;
	C_Perfil : boolean = false;
	C_Perfiles_Admin : boolean = false;
	C_Footer : boolean = true;
	navbar : boolean = true;
	//! tiene que ser true cuando un admin inicia sesión
	admin: boolean = false;

	cerrarSesion() { 
		this.cerrarSesionA.emit();
		this.showInicio();
	}
	
	showInicio() {
		this.router.navigate(['/inicio']);
		this.C_Inicio = true;
		this.C_Historial = false;
		this.C_Historial_Admin = false;
		this.C_Reporte = false;
		this.C_Perfil = false;
		this.C_Perfiles_Admin = false;
		this.C_Footer = true;
		this.navbar = true;
	}
	showHistorial() {
		this.router.navigate(['/inicio']);
		this.C_Inicio = false;
		this.C_Historial = true;
		this.C_Historial_Admin = false;
		this.C_Reporte = false;
		this.C_Perfil = false;
		this.C_Perfiles_Admin = false;
		this.C_Footer = true;
		this.navbar = true;
	}
	showHistorialAdmin() {
		this.router.navigate(['/historial-admin']);
		this.C_Inicio = false;
		this.C_Historial = false;
		this.C_Historial_Admin = true;
		this.C_Reporte = false;
		this.C_Perfil = false;
		this.C_Perfiles_Admin = false;
		this.C_Footer = true;
		this.navbar = true;
	}
	showReporte() {
		this.router.navigate(['/crear-reporte']);
		this.C_Inicio = false;
		this.C_Historial = false;
		this.C_Historial_Admin = false;
		this.C_Reporte = true;
		this.C_Perfil = false;
		this.C_Perfiles_Admin = false;
		this.C_Footer = false;
		this.navbar = false;
	}
	showPerfil() {
		this.router.navigate(['/perfil']);
		this.C_Inicio = false;
		this.C_Historial = false;
		this.C_Historial_Admin = false;
		this.C_Reporte = false;
		this.C_Perfil = true;
		this.C_Perfiles_Admin = false;
		this.C_Footer = false;
		this.navbar = false;
	}
	showPerfilesAdmin() {
		this.router.navigate(['/usuarios-admin']);
		this.C_Inicio = false;
		this.C_Historial = false;
		this.C_Historial_Admin = false;
		this.C_Reporte = false;
		this.C_Perfil = false;
		this.C_Perfiles_Admin = true;
		this.C_Footer = true;
		this.navbar = true;
	}
}