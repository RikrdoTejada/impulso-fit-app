import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface RankingEntry {
    puesto: number;
    usuario: string;
    progreso: number;
}

@Component({
    selector: 'app-participacion-reto',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './participacion-reto.component.html',
    styleUrl: './participacion-reto.component.css'
})
export class ParticipacionRetoComponent {
    progresoInput: number | null = null;
    miProgreso: number = 0;

    ranking: RankingEntry[] = [
        { puesto: 1, usuario: 'Eduardo M.', progreso: 100 },
        { puesto: 2, usuario: 'Erica J.', progreso: 85 },
        { puesto: 3, usuario: 'Carlos R.', progreso: 70 },
        { puesto: 4, usuario: 'Ana P.', progreso: 55 },
        { puesto: 5, usuario: 'Luis G.', progreso: 40 }
    ];

    subirProgreso() {
        if (this.progresoInput !== null) {
            console.log('Subiendo progreso:', this.progresoInput);
            // Aquí iría la lógica para actualizar el progreso en el backend
            this.miProgreso = Math.min(100, this.miProgreso + 10); // Mock update
            this.progresoInput = null;
        }
    }
}
