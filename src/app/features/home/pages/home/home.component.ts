import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private router = inject(Router);
  
  searchTerm: string = ''; 

  buscarUsuario() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/resultados'], { 
        queryParams: { termino: this.searchTerm } 
      });
    }
  }
}
