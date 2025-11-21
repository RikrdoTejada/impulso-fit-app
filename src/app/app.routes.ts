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
    },
    {
        path: 'retos',
        loadComponent: () => import('./features/retos/pages/retos/retos.component').then(m => m.RetosComponent)
    },
    {
        path: 'crear-reto',
        loadComponent: () => import('./features/retos/pages/crear-reto/crear-reto.component').then(m => m.CrearRetoComponent)
    },
    {
        path: 'detalle-reto',
        loadComponent: () => import('./features/retos/pages/detalle-reto/detalle-reto.component').then(m => m.DetalleRetoComponent)
    },
    {
        path: 'participacion-reto',
        loadComponent: () => import('./features/retos/pages/participacion-reto/participacion-reto.component').then(m => m.ParticipacionRetoComponent)
    }
];

