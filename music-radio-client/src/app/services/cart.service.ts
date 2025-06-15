import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  title: string;
  artist: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];
  private items$ = new BehaviorSubject<CartItem[]>([]);

  getCart() {
    return this.items$.asObservable();
  }

  add(item: Omit<CartItem, 'quantity'>) {
    const existing = this.items.find(i => i.title === item.title);
    if (existing) {
      existing.quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
    this.items$.next(this.items);
  }

  clear() {
    this.items = [];
    this.items$.next(this.items);
  }
}
