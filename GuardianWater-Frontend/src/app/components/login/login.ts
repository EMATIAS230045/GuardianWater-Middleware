import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'app-login-container',
	standalone: true,
	imports: [],
	templateUrl: './login.html',
	styleUrl: './login.css',
})

export class LoginComponent {
	constructor(
	private router: Router,
	private authService: AuthService
	) {}
	@Output() loginSuccess = new EventEmitter<void>();
	login: boolean = true;

	email: string = "";
  	password: string = "";
  	errorMessage: string = "";
	
	registrarse() {
		this.login = !this.login;
	}

	push_login() {
		this.authService.login(this.email, this.password)
		.subscribe({
        next: (res) => {
          console.log("Login exitoso", res);
          this.router.navigate(['/inicio']);
        },
        error: (err) => {
          this.errorMessage = err.error.error || "Error en el login";
        }
      });
	}
	push_registro() {
		this.login = true;
	}
}
