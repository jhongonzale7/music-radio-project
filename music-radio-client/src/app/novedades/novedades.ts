import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink }    from '@angular/router';

@Component({
  selector: 'app-novedades',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './novedades.html',
  styleUrls: ['./novedades.css']
})
export class NovedadesComponent {
  // Lista de novedades ficticias
  novedades = [
    { title: 'Nuevo Álbum 1', description: 'La última producción de Artista A', image: 'assets/novedad1.jpg' },
    { title: 'Nuevo Álbum 2', description: 'Explora sonidos de Grupo B',  image: 'assets/novedad2.jpg' },
    { title: 'Nuevo Álbum 3', description: 'Vibraciones de DJ C',          image: 'assets/novedad3.jpg' }
  ];
}
