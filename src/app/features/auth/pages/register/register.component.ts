import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
    nombres: string = '';
    apellido_p: string = '';
    apellido_m: string = '';
    genero: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    fecha_dia: string = '';
    fecha_mes: string = '';
    fecha_anio: string = '';
    cod_pregunta: string = '';
    respuesta: string = '';

    constructor(private router: Router) { }

    onSubmit() {
        if (this.password !== this.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        console.log('Creando cuenta...', {
            nombres: this.nombres,
            apellido_p: this.apellido_p,
            apellido_m: this.apellido_m,
            genero: this.genero,
            email: this.email,
            fecha_nacimiento: `${this.fecha_anio}-${this.fecha_mes}-${this.fecha_dia}`,
            cod_pregunta: this.cod_pregunta,
            respuesta: this.respuesta
        });

        // Simulación de creación de cuenta exitosa
        this.router.navigate(['/crear-perfil']);
    }
}
