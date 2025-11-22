import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {
    loading = false;
    error: string | null = null;

    constructor(private http: HttpClient, private router: Router) {}

    onSubmit(event: Event) {
        event.preventDefault();
        this.error = null;
        const form = event.target as HTMLFormElement;
        const fd = new FormData(form);

        const dia = (fd.get('fecha_dia') as string) ?? '';
        const mes = (fd.get('fecha_mes') as string) ?? '';
        const anio = (fd.get('fecha_anio') as string) ?? '';

        let rawFecha = '';
        if (dia || mes || anio) {
            rawFecha = `${dia}/${mes}/${anio}`;
        }

        let fechaIso: string | undefined = undefined;
        if (rawFecha) {
            const m = rawFecha.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
            if (m) {
                const dd = m[1].padStart(2, '0');
                const mm = m[2].padStart(2, '0');
                const yyyy = m[3];
                fechaIso = `${yyyy}-${mm}-${dd}`;
            } else {
                const isoMatch = rawFecha.match(/^(\d{4})-(\d{2})-(\d{2})$/);
                if (isoMatch) fechaIso = rawFecha;
            }
        }

        const pass = (fd.get('password') as string) ?? '';
        const conf = (fd.get('confirm-password') as string) ?? '';
        if (conf && pass !== conf) {
            this.error = 'Las contraseñas no coinciden';
            return;
        }

        const rawCod = fd.get('cod_pregunta');
        let codPreguntaValue: string | undefined = undefined;
        if (rawCod !== null) {
            const s = String(rawCod).trim();
            if (/^\d+$/.test(s)) {
                const map = ['MASCOT', 'TEACHER', 'NICKNAME'];
                const idx = parseInt(s, 10);
                codPreguntaValue = map[idx] ?? undefined;
            } else if (s.length > 0) {
                codPreguntaValue = s;
            }
        }

        const payload: any = {
            email: (fd.get('email') as string) ?? '',
            contrasena: (fd.get('password') as string) ?? '',
            cod_pregunta: codPreguntaValue,
            respuesta: (fd.get('respuesta') as string) ?? undefined,
            nombres: (fd.get('nombres') as string) ?? '',
            apellido_p: (fd.get('apellido_p') as string) ?? '',
            apellido_m: (fd.get('apellido_m') as string) ?? undefined,
            fecha_nacimiento: fechaIso,
            genero: (fd.get('genero') as string) ?? undefined
        };

        this.loading = true;

        this.http.post(`${environment.apiUrl}/auth/register`, payload).subscribe({
            next: (res: any) => {
                this.loading = false;
                try {
                    if (res?.token) {
                        localStorage.setItem('auth_token', res.token);
                        localStorage.setItem('auth_email', res.email ?? '');
                        localStorage.setItem('auth_name', res.name ?? '');
                    }
                } catch (e) {
                }
                this.router.navigate(['/home']);
            },
            error: (err: any) => {
                this.loading = false;
                console.error('register error', err);
                if (err?.error?.message) {
                    this.error = err.error.message;
                } else if (err?.error) {
                    try {
                        this.error = JSON.stringify(err.error);
                    } catch (e) {
                        this.error = String(err.error);
                    }
                } else {
                    this.error = err?.message || 'Error en el registro';
                }
            }
        });
    }

}