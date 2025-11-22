import { Routes } from '@angular/router';
<<<<<<< HEAD
import { AUTH_ROUTES } from './features/auth/auth.routes';

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
        path: 'auth',
        children: AUTH_ROUTES
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
    },
    {
        path: 'grupo-detalle',
        loadComponent: () => import('./features/grupos/pages/grupo-detalle/grupo-detalle.component').then(m => m.GrupoDetalleComponent)
    },
    {
        path: 'publicar-grupo',
        loadComponent: () => import('./features/grupos/pages/publicar-grupo/publicar-grupo.component').then(m => m.PublicarGrupoComponent)
    },
    {
        path: 'perfil',
        loadComponent: () => import('./features/perfil/pages/perfil/perfil.component').then(m => m.PerfilComponent)
    },
    {
        path: 'editar-perfil',
        loadComponent: () => import('./features/perfil/pages/editar-perfil/editar-perfil.component').then(m => m.EditarPerfilComponent)
    },
    {
        path: 'eliminar-perfil',
        loadComponent: () => import('./features/perfil/pages/eliminar-perfil/eliminar-perfil.component').then(m => m.EliminarPerfilComponent)
    },
    {
        path: 'crear-grupo',
        loadComponent: () => import('./features/grupos/pages/crear-grupo/crear-grupo.component').then(m => m.CrearGrupoComponent)
    }
];

=======

export const routes: Routes = [];
>>>>>>> 6cc7fd06921089d2e0b57bb51914efbef29f0f95
