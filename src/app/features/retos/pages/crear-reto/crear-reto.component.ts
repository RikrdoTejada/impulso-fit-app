import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-crear-reto',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './crear-reto.component.html',
    styleUrl: './crear-reto.component.css'
})
export class CrearRetoComponent {
    nombreReto: string = '';
    descripcion: string = '';
    duracion: number | null = null;
    tipo: string = '';
    dificultad: string = 'intermedio';

    constructor(private router: Router) { }

    cancelar() {
        this.router.navigate(['/retos']);
    }

    crearReto() {
        console.log('Creando reto:', {
            nombre: this.nombreReto,
            descripcion: this.descripcion,
            duracion: this.duracion,
            tipo: this.tipo,
            dificultad: this.dificultad
        });
        // Simular creación exitosa
        this.router.navigate(['/retos']);
    }
}
