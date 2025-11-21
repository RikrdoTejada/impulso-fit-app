import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'deporte',
        loadChildren: () => import('./features/deporte/deporte.routes').then(m => m.deporteRoutes)
    },
    {
        path: 'unidad',
        loadChildren: () => import('./features/unidad/unidad.routes').then(m => m.unidadRoutes)
    },
    {
        path: '',
        loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingPageComponent)
    },
    {
        path: 'iniciar-sesion',
        loadComponent: () => import('./features/auth/pages/iniciar-sesion/iniciar-sesion.component').then(m => m.IniciarSesionComponent)
    },
    {
        path: 'recuperar-contrasena',
        loadComponent: () => import('./features/auth/pages/recuperar-contrasena/recuperar-contrasena.component').then(m => m.RecuperarContrasenaComponent)
    },
    {
        path: 'registro',
        loadComponent: () => import('./features/auth/pages/register/register.component').then(m => m.RegisterComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'comentarios',
        loadComponent: () => import('./features/comentarios/pages/comentarios/comentarios.component').then(m => m.ComentariosComponent)
    },
    {
        path: 'publicar',
        loadComponent: () => import('./features/publicar-feed/pages/publicar-feed/publicar-feed.component').then(m => m.PublicarFeedComponent)
    },
    {
        path: 'grupos',
        loadComponent: () => import('./features/grupos/pages/grupos/grupos.component').then(m => m.GruposComponent)
    }
];

