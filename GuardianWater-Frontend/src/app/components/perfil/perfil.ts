import { Component, EventEmitter, Output, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
	selector: 'app-perfil',
	imports: [NgClass, NgIf],
	templateUrl: './perfil.html',
	styleUrl: './perfil.css',
})
export class PerfilComponent {
	constructor(private router: Router) {}
	@Output() go_back = new EventEmitter<void>();
	@Input() admin!: boolean;

	user =	{ 
		id_user: "5610826478", 
		name: "Diego", 
		last_name: "Rivera", 
		email: "diegorivera@gmail.com",
		direction: "Direccion_del_perfil", 
		password: "n8g7DnOUI342Ni2on8", 
		dateCreated: "01-12-2025"
	};

	load_photo() {}
	save_profile() { 
		/*back*/
		this.goback()
	 }
	goback() {
		this.go_back.emit();
		this.router.navigate(['/inicio']);
	}
}
