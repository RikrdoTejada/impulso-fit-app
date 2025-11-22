import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-deporte',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-deporte.component.html',
  styleUrls: ['./agregar-deporte.component.css']
})
export class AgregarDeporteComponent {
  deporteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.deporteForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required]],
      icono: [''] // Optional icon URL or class
    });
  }

  onSubmit() {
    if (this.deporteForm.valid) {
      console.log('Deporte a registrar:', this.deporteForm.value);
      alert('Deporte registrado exitosamente');
      this.router.navigate(['/']); 
    } else {
      this.deporteForm.markAllAsTouched();
    }
  }
}
