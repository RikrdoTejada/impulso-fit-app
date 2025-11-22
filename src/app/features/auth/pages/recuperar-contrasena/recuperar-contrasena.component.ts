import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

enum SecurityQuestionType {
    MASCOT = 'MASCOT',
    TEACHER = 'TEACHER',
    NICKNAME = 'NICKNAME'
}

@Component({
    selector: 'app-recuperar-contrasena',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './recuperar-contrasena.component.html',
    styleUrl: './recuperar-contrasena.component.css'
})
export class RecuperarContrasenaComponent {
    step: number = 1;
    email: string = '';
    securityQuestionType: SecurityQuestionType | null = null;
    securityAnswer: string = '';
    newPassword: string = '';
    confirmPassword: string = '';

    constructor(private router: Router) { }

    get securityQuestionText(): string {
        switch (this.securityQuestionType) {
            case SecurityQuestionType.MASCOT:
                return '¿Nombre de tu primera mascota?';
            case SecurityQuestionType.TEACHER:
                return '¿Nombre de tu profesor favorito?';
            case SecurityQuestionType.NICKNAME:
                return '¿Cuál fue tu apodo en la escuela?';
            default:
                return '';
        }
    }

    buscarCuenta() {
        if (this.email) {
            console.log('Buscando cuenta para:', this.email);
            // Simulación de backend: devuelve un tipo de pregunta aleatorio o fijo
            // Para este ejemplo, usaremos MASCOT
            this.securityQuestionType = SecurityQuestionType.MASCOT;
            this.step = 2;
        }
    }

    validarRespuesta() {
        if (this.securityAnswer) {
            console.log('Validando respuesta:', this.securityAnswer);
            // Simulación de validación exitosa
            this.step = 3;
        }
    }

    cambiarContrasena() {
        if (this.newPassword && this.confirmPassword) {
            if (this.newPassword === this.confirmPassword) {
                console.log('Cambiando contraseña...');
                // Simulación de cambio exitoso
                this.router.navigate(['/iniciar-sesion']);
            } else {
                alert('Las contraseñas no coinciden');
            }
        }
    }
}
