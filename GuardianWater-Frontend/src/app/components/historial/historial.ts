import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
	selector: 'app-historial',
	imports: [NgClass, NgFor],
	templateUrl: './historial.html',
	styleUrl: './historial.css',
})
export class HistorialComponent {
	@Input() admin!: boolean;

	hovered: number | null = null;
	expanded: number | null = null;

	items = [
		{ user: "Diego", title: "Titulo Titulo Titulo Titulo Titulo Titulo Titulo", description: "Descripción", dateReported: "01-12-25", dateUpdate: "03-12-25", status: "Completado" },
		{ user: "Diego", title: "Titulo", description: "Descripción", dateReported: "01-12-25", dateUpdate: "03-12-25", status: "En revisión"  },
		{ user: "Diego", title: "Titulo", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", dateReported: "01-12-25", dateUpdate: "", status: "Enviado"  }
	];

	toggleItem(i: number) {
		this.expanded = this.expanded === i ? null : i;
	}
}
