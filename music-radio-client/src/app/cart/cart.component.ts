import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart$: Observable<CartItem[]>; // <- Esto faltaba

  constructor(private cartService: CartService) {
    this.cart$ = this.cartService.getCart(); // <- Asignación en el constructor
  }

  checkout() {
    // Aquí puedes implementar la lógica de pago (por ahora solo limpia el carrito y muestra un alert)
    this.cartService.clear();
    alert('¡Gracias por tu compra!');
  }
}
