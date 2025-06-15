import { Injectable } from '@angular/core';

export interface Album {
  title: string;
  artist: string;
  price: number;
  image: string;
  presale?: boolean;
}


@Injectable({ providedIn: 'root' })
export class AlbumsService {
  albums: Album[] = [
    { title: 'Vibraciones', artist: 'DJ C', price: 11.99, image: 'assets/djC.jpg' },
    { title: 'Sonidos del Alma', artist: 'Artista A', price: 9.99, image: 'assets/artistaA.jpg' },
    { title: 'Grupos Musicales', artist: 'Grupo B', price: 12.50, image: 'assets/grupoB.jpg', presale: true },
    { title: 'Éxitos 2025', artist: 'Varios', price: 15.00, image: 'assets/album3.jpg' }
  ];

  getAll() {
    return this.albums;
  }
}
