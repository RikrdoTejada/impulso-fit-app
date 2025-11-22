import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-eliminar-perfil',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './eliminar-perfil.component.html',
    styleUrl: './eliminar-perfil.component.css'
})
export class EliminarPerfilComponent {

    constructor(private router: Router) { }

    cancelar() {
        this.router.navigate(['/editar-perfil']);
    }

    eliminar() {
        console.log('Eliminando perfil...');
        // Aquí iría la lógica para eliminar en backend
        this.router.navigate(['/iniciar-sesion']);
    }
}
