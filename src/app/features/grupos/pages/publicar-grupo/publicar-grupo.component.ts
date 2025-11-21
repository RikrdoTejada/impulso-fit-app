import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-publicar-grupo',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './publicar-grupo.component.html',
    styleUrl: './publicar-grupo.component.css'
})
export class PublicarGrupoComponent {
    textoPublicacion: string = '';
    maxCaracteres: number = 500;

    constructor(private router: Router) { }

    get caracteresRestantes(): number {
        return this.maxCaracteres - this.textoPublicacion.length;
    }

    cancelar() {
        this.router.navigate(['/grupo-detalle']);
    }

    publicar() {
        console.log('Publicando post en grupo:', this.textoPublicacion);
        // Simular éxito
        this.router.navigate(['/grupo-detalle']);
    }
}
