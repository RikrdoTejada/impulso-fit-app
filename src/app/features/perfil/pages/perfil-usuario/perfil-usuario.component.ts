import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent {

  // Estado para saber si ya seguimos a este usuario
  isFollowing = signal(false);

  // Datos simulados del usuario (más adelante vendrán de tu API)
  user = {
    name: 'Eduardo M.',
    location: 'Santiago de Surco, Lima',
    bio: 'Hola! Bienvenido a mi perfil. Me encanta el ciclismo y el gimnasio. Siempre buscando nuevos retos! 🚴🏋️‍♂️',
    followers: 90,
    following: 150,
    avatar: 'https://placehold.co/150x150/png?text=EM'
  };

  toggleFollow() {
    // Invertimos el valor (true <-> false)
    this.isFollowing.update(value => !value);
    
    // Aquí llamarías a tu servicio: authService.followUser(id)...
    if (this.isFollowing()) {
      this.user.followers++; // Simulamos el aumento inmediato
    } else {
      this.user.followers--;
    }
  }
}