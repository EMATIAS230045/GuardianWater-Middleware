import { Component ,Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-historial-admin',
	imports: [NgClass],
	templateUrl: './historial-admin.html',
	styleUrl: './historial-admin.css',
})
export class HistorialAdminComponent {
	@Input() admin!: boolean;
}
