import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchService } from '@core/services/search.service';
import { SearchResponse } from '@core/models/busqueda.model';


@Component({
  selector: 'app-resultados-busqueda',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resultados-busqueda.component.html',
  styleUrl: './resultados-busqueda.component.css'
})
export class ResultadosBusquedaComponent implements OnInit {
  
  private route = inject(ActivatedRoute);
  private searchService = inject(SearchService);
  
  
  terminoBusqueda = signal('');
  loading = signal(false);
  userPage = signal(0);
  groupPage = signal(0);
  itemsPerPage = 3;
  resultados: SearchResponse = { grupos: [], perfiles: [], retos: [] };

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const termino = params['termino'];
      if (termino) {
        this.terminoBusqueda.set(termino);
        this.realizarBusqueda(termino);
      }
    });
  }

  realizarBusqueda(termino: string) {
    this.loading.set(true);
    this.userPage.set(0);
    this.groupPage.set(0);

    this.searchService.buscar(termino).subscribe({
      next: (data) => {
        this.resultados = data;
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      }
    });
  }

   nextPage(type: 'users' | 'groups') {
    if (type === 'users') {
      const maxPage = Math.ceil(this.resultados.perfiles.length / this.itemsPerPage) - 1;
      if (this.userPage() < maxPage) this.userPage.update(p => p + 1);
    } else {
      const maxPage = Math.ceil(this.resultados.grupos.length / this.itemsPerPage) - 1;
      if (this.groupPage() < maxPage) this.groupPage.update(p => p + 1);
    }
  }

  prevPage(type: 'users' | 'groups') {
    if (type === 'users') {
      if (this.userPage() > 0) this.userPage.update(p => p - 1);
    } else {
      if (this.groupPage() > 0) this.groupPage.update(p => p - 1);
    }
  }

  getIniciales(nombre: string): string {
    return nombre.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }
}