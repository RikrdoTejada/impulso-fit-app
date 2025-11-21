import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-editar-perfil',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './editar-perfil.component.html',
    styleUrl: './editar-perfil.component.css'
})
export class EditarPerfilComponent {
    nombre: string = 'Eduardo';
    apellidos: string = 'Matos';
    ubicacion: string = 'Santiago de Surco, Lima';
    fechaNacimiento: string = '1999-05-24';
    bio: string = 'Hola! Bienvenido a mi perfil. Me encanta el ciclismo y el gimnasio. Siempre buscando nuevos retos! 🚴🏋️‍♂️';

    constructor(private router: Router) { }

    guardarCambios() {
        console.log('Guardando cambios del perfil...');
        // Aquí iría la lógica para guardar en backend
        this.router.navigate(['/perfil']);
    }
}
