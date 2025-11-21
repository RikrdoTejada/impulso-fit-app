import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-agregar-unidad',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './agregar-unidad.component.html',
    styleUrls: ['./agregar-unidad.component.css']
})
export class AgregarUnidadComponent {
    unidadForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.unidadForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(2)]],
            simbolo: ['', [Validators.required, Validators.maxLength(5)]],
            tipo: ['numerico', [Validators.required]] // e.g., numeric, time, etc.
        });
    }

    onSubmit() {
        if (this.unidadForm.valid) {
            console.log('Unidad a registrar:', this.unidadForm.value);
            // TODO: Call service to save unit
            alert('Unidad registrada exitosamente (Simulado)');
            this.router.navigate(['/']); // Navigate back or to list
        } else {
            this.unidadForm.markAllAsTouched();
        }
    }
}
