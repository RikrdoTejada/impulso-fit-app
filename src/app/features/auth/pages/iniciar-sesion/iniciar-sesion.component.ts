import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';
import { LoginRequestDTO } from '@core/models/usuario.model';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-iniciar-sesion',
    standalone: true,
    imports: [CommonModule, RouterLink, ReactiveFormsModule],
    templateUrl: './iniciar-sesion.component.html',
    styleUrl: './iniciar-sesion.component.css',
})
export class IniciarSesionComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  loading = signal(false);
  errorMessage = signal('');
  showPassword = signal(false);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  togglePassword() {
    this.showPassword.update(value => !value);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading.set(true);
      this.errorMessage.set('');

      const credentials: LoginRequestDTO = {
        email: this.loginForm.value.email,
        contrasena: this.loginForm.value.password
      };

      this.authService.login(credentials).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.errorMessage.set('Credenciales incorrectas. Por favor, verifica tus datos.');
          this.loading.set(false);
        }
      });
    }
  }
}

