import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-crear-perfil',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './crear-perfil.component.html',
    styleUrl: './crear-perfil.component.css'
})
export class CrearPerfilComponent {
    nombre: string = '';
    apellidos: string = '';
    ubicacion: string = '';
    fechaNacimiento: string = '';
    bio: string = '';

    constructor(private router: Router) { }

    finalizarRegistro() {
        console.log('Finalizando registro...', {
            nombre: this.nombre,
            apellidos: this.apellidos,
            ubicacion: this.ubicacion,
            fechaNacimiento: this.fechaNacimiento,
            bio: this.bio
        });
        // Simulación de guardado en backend
        this.router.navigate(['/home']);
    }
}
