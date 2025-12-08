import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-container',
	imports: [],
	templateUrl: './login.html',
	styleUrl: './login.css',
})

export class LoginComponent {
	constructor(private router: Router) {}
	@Output() loginSuccess = new EventEmitter<void>();
	login: boolean = true;

	registrarse() {
		this.login = !this.login;
	}

	push_login() {
		this.loginSuccess.emit(); //notifica al componente principal
		this.router.navigate(['/inicio']);
	}
	push_registro() {
		this.login = true;
	}
}
