import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { SearchResponse } from '../models/busqueda.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  buscar(termino: string): Observable<SearchResponse> {
    
    // Datos simulados (MOCK)
    const mockData: SearchResponse = {
      grupos: [
        {
          id_grupo: 1,
          nombre: "Upecinos Básquet Club",
          deporte: "Básquet",
          descripcion: "Equipo oficial de básquet UPC.",
          accionUnirseUrl: "/grupos/1/unirse",
          ubicacion: "Lima",
          fecha_creacion: "2025-11-17",
          nroSeguidores: 2
        },
        {
          id_grupo: 2,
          nombre: "Upecinos Básquet Club 2",
          deporte: "Básquet",
          descripcion: "Equipo oficial de reserva.",
          accionUnirseUrl: "/grupos/2/unirse",
          ubicacion: "Lima",
          fecha_creacion: "2025-11-19",
          nroSeguidores: 1
        },
        {
          id_grupo: 3,
          nombre: "Runners San Borja",
          deporte: "Running",
          descripcion: "Salimos a correr todos los martes.",
          accionUnirseUrl: "/grupos/3/unirse",
          ubicacion: "San Borja",
          fecha_creacion: "2025-10-10",
          nroSeguidores: 45
        },
        {
          id_grupo: 4,
          nombre: "Yoga Miraflores",
          deporte: "Yoga",
          descripcion: "Clases al aire libre.",
          accionUnirseUrl: "/grupos/4/unirse",
          ubicacion: "Miraflores",
          fecha_creacion: "2025-09-15",
          nroSeguidores: 30
        }
      ],
      perfiles: [
        { idPerfil: 1, email: "manolo@mail.com", nombres: "Manuel Uranio Perez", role: "ROLE_USER", bloqueado: false },
        { idPerfil: 2, email: "ana@mail.com", nombres: "Ana Maria Lopez", role: "ROLE_USER", bloqueado: false },
        { idPerfil: 3, email: "luis@mail.com", nombres: "Luis Martin Gónzales", role: "ROLE_USER", bloqueado: false },
        { idPerfil: 4, email: "carlos@mail.com", nombres: "Carlos Ruiz", role: "ROLE_ADMIN", bloqueado: false }
      ],
      retos: [
        { id_reto: 2, grupoNombre: "Upecinos Básquet Club", creadorNombre: "Manuel Uranio", unidad: "PUNTOS", titulo: "Reto de Canastas", descripcion: "Lograr la meta de canastas diarias.", objetivoTotal: 10.0, fechaPublicacion: "2025-11-17", fecha_inicio: "2025-11-29", fecha_fin: "2025-11-30", nroSeguidores: 1 },
        { id_reto: 3, grupoNombre: "Runners Lima", creadorNombre: "Ana Lopez", unidad: "KM", titulo: "Maratón Semanal", descripcion: "Correr 10km en una semana", objetivoTotal: 10.0, fechaPublicacion: "2025-11-19", fecha_inicio: "2025-11-29", fecha_fin: "2025-11-30", nroSeguidores: 5 }
      ]
    };

    return of(mockData).pipe(delay(500));
  }
}