import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-grupos',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './grupos.component.html',
    styleUrl: './grupos.component.css'
})
export class GruposComponent {

}
