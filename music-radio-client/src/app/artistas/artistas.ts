import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterLink }    from '@angular/router';


@Component({
  selector: 'app-artistas',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './artistas.html',
  styleUrls: ['./artistas.css']
})
export class ArtistasComponent {
  // Lista de artistas ficticios
  artistas = [
    { name: 'Artista A', image: 'assets/artistaA.jpg' },
    { name: 'Grupo B',   image: 'assets/grupoB.jpg' },
    { name: 'DJ C',      image: 'assets/djC.jpg' }
  ];
}
