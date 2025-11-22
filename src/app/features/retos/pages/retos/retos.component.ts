import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Reto {
    titulo: string;
    descripcion: string;
}

@Component({
    selector: 'app-retos',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './retos.component.html',
    styleUrl: './retos.component.css'
})
export class RetosComponent {
    retos: Reto[] = [
        {
            titulo: 'Reto: Abs de Acero',
            descripcion: 'Un desafío de 30 días enfocado en fortalecer tu core. Incluye rutinas diarias de 10 minutos.'
        },
        {
            titulo: '7 Días, 7 Cardios',
            descripcion: 'Mejora tu resistencia con una semana intensiva de ejercicios cardiovasculares variados.'
        },
        {
            titulo: 'Piernas de Titanio',
            descripcion: 'Entrenamiento de fuerza para tren inferior. Sentadillas, lunges y más para potenciar tus piernas.'
        },
        {
            titulo: 'Full Body Express',
            descripcion: 'Rutinas de cuerpo completo de alta intensidad para quienes tienen poco tiempo pero quieren resultados.'
        }
    ];
}
