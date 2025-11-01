import { Component } from '@angular/core';
import { User } from 'src/core/models/user';
import { ApiService } from 'src/core/service/api.service';

@Component({
  selector: 'app-buscador-alumnos',
  templateUrl: './buscador-alumnos.component.html',
  styleUrls: ['./buscador-alumnos.component.scss']
})
export class BuscadorAlumnosComponent {
  username = '';
  resultados: User[] = [];
  loading = false;
  error: string | null = null;


  constructor(private usuariosService: ApiService) {}

  buscar() {
    this.error = null;
    this.resultados = [];
    this.loading = true;

    const usernameToSend = this.username; // sin lower aquí: el backend hace lower o lo hiciste en Java

   this.usuariosService.searchByUsername(usernameToSend).subscribe({
      next: (res) => {
        this.resultados = res as User[];
        console.log(this.resultados)
        this.loading = false;
      },
      error: err => {
        console.error('Error al buscar', err);
        this.error = err?.message || 'Error en la búsqueda';
        this.loading = false;
      }
    });
  }

  // useful for quick test payloads
  setPayload(payload: string) {
    this.username = payload;
  }

    trackByAuth0Id(_: number, alumno: User): string {
      return alumno.auth0Id;
    }
}
