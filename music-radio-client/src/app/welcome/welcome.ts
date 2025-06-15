import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule }   from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';
import { AlbumsService, Album } from '../services/albums.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    RouterLink

  ],
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class WelcomeComponent {
  hoveredAlbum: any = null;
  albums: Album[] = [];

  constructor(
    private cart: CartService,
    private snackBar: MatSnackBar,
    private router: Router,
    private albumsService: AlbumsService
  ) {
    this.albums = this.albumsService.getAll();
  }

  addToCart(album: Omit<CartItem, 'quantity'>) {
    this.cart.add(album);
    this.snackBar.open('Álbum agregado al carrito', 'Ir al carrito', { duration: 2000 })
      .onAction().subscribe(() => this.router.navigate(['/cart']));
  }
}
