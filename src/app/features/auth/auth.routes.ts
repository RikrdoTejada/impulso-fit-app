import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {
        path: 'iniciar-sesion',
        loadComponent: () => import('./pages/iniciar-sesion/iniciar-sesion.component').then(m => m.IniciarSesionComponent)
    },
    {
        path: 'recuperar-contrasena',
        loadComponent: () => import('./pages/recuperar-contrasena/recuperar-contrasena.component').then(m => m.RecuperarContrasenaComponent)
    },
    {
        path: 'registro',
        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent)
    }
];