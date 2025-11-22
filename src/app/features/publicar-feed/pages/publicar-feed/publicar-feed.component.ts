import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-publicar-feed',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './publicar-feed.component.html',
    styleUrl: './publicar-feed.component.css'
})
export class PublicarFeedComponent {
    textoPublicacion: string = '';
    maxCaracteres: number = 500;

    constructor(private router: Router) { }

    get caracteresRestantes(): number {
        return this.maxCaracteres - this.textoPublicacion.length;
    }

    cancelar() {
        this.router.navigate(['/home']);
    }

    publicar() {
        console.log('Publicando post:', this.textoPublicacion);
        // Simular éxito
        this.router.navigate(['/home']);
    }
}
