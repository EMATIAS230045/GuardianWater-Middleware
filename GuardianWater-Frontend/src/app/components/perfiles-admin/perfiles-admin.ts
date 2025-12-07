import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-perfiles-admin',
	imports: [NgClass],
	templateUrl: './perfiles-admin.html',
	styleUrl: './perfiles-admin.css',
})
export class PerfilesAdminComponent {
	@Input() admin!: boolean;
}
