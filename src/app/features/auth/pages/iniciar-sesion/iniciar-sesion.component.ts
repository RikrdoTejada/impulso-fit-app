import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-iniciar-sesion',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './iniciar-sesion.component.html',
    styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
    constructor(private router: Router) { }

    ingresar() {
        this.router.navigate(['/home']);
    }
}
