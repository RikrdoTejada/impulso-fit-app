import { Routes } from '@angular/router';
import { AgregarUnidadComponent } from './pages/agregar-unidad/agregar-unidad.component';

export const unidadRoutes: Routes = [
    { path: 'agregar', component: AgregarUnidadComponent },
    { path: '', redirectTo: 'agregar', pathMatch: 'full' } // Default to agregar for now
];
