import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-comentarios',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './comentarios.component.html',
    styleUrl: './comentarios.component.css'
})
export class ComentariosComponent {

}
