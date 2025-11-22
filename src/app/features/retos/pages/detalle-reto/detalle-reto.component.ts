import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface RankingEntry {
    puesto: number;
    usuario: string;
    progreso: number;
}

@Component({
    selector: 'app-detalle-reto',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './detalle-reto.component.html',
    styleUrl: './detalle-reto.component.css'
})
export class DetalleRetoComponent {
    ranking: RankingEntry[] = [
        { puesto: 1, usuario: 'Eduardo M.', progreso: 100 },
        { puesto: 2, usuario: 'Erica J.', progreso: 85 },
        { puesto: 3, usuario: 'Carlos R.', progreso: 70 },
        { puesto: 4, usuario: 'Ana P.', progreso: 55 },
        { puesto: 5, usuario: 'Luis G.', progreso: 40 }
    ];
}
