import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './services/auth';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

// IMPORTA EL SERVICIO DEL CARRITO Y EL MODELO
import { CartService, CartItem } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule // <- IMPORTANTE
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  user: any = null;
  cartCount: number = 0; // <-- AGREGA ESTA LÍNEA

  constructor(
    private auth: AuthService,
    private cartService: CartService, // <-- AGREGA AQUÍ EL SERVICIO
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.me().subscribe({
      next: user => this.user = user,
      error: () => this.user = null
    });

    // Suscríbete al observable del carrito para el badge
    this.cartService.getCart().subscribe((items: CartItem[]) => {
      this.cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
    });
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.user = null;
      this.router.navigate(['/']);
    });
  }
}
