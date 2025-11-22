import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-crear-grupo',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './crear-grupo.component.html',
    styleUrl: './crear-grupo.component.css'
})
export class CrearGrupoComponent {
    nombreGrupo: string = '';
    deporte: string = '';
    descripcion: string = '';
    ubicacion: string = '';
    privacidad: string = 'publico';
    maxCaracteres: number = 500;

    constructor(private router: Router) { }

    get caracteresUsados(): number {
        return this.descripcion.length;
    }

    cancelar() {
        this.router.navigate(['/grupos']);
    }

    crearGrupo() {
        console.log('Creando grupo:', {
            nombre: this.nombreGrupo,
            deporte: this.deporte,
            descripcion: this.descripcion,
            ubicacion: this.ubicacion,
            privacidad: this.privacidad
        });
        // Simular creación exitosa
        this.router.navigate(['/grupos']);
    }
}
