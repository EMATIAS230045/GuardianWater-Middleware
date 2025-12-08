import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
	selector: 'app-login-container',
	standalone: true,
    imports: [
        CommonModule,
        FormsModule 
    ],
	templateUrl: './login.html',
	styleUrl: './login.css',
})

export class LoginComponent {

    email: string = "";
    password: string = "";
    errorMessage: string = ""; 
	constructor(private router: Router,
		private authService: AuthService 
	) {}

	@Output() loginSuccess = new EventEmitter<void>();
	login: boolean = true;

	registrarse() {
		this.login = !this.login;
	}

	push_login() {
		this.errorMessage = "";
        
       
        this.authService.login(this.email, this.password)
            .subscribe({
                next: (res) => {
                    console.log("Login exitoso", res);
                    this.loginSuccess.emit(); 
                    this.router.navigate(['/inicio']); 
                },
                error: (err) => {
                    this.errorMessage = err.error.error || "Error de conexión o credenciales.";
                }
            });
	}
	push_registro() {
		this.login = true;
	}
}
