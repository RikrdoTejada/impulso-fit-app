import { Routes } from '@angular/router';
import { AgregarDeporteComponent } from './pages/agregar-deporte/agregar-deporte.component';

export const deporteRoutes: Routes = [
    { path: 'agregar', component: AgregarDeporteComponent },
    { path: '', redirectTo: 'agregar', pathMatch: 'full' } // Default to agregar for now
];
