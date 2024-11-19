import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  input,
  OnChanges,
  output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ProductsService } from '../services/products.service';

@Component({
  standalone: true,
  templateUrl: './navbar.component.html',
  selector: 'app-navbar',
  styleUrl: './navbar.component.css',
  imports: [CommonModule, CartComponent],
})
export class NavbarComponent implements OnChanges {
  cartNumber = input(0);
  productService = inject(ProductsService);
  activeCart = false;
  activeNav = false;
  cartItems = signal<number>(0);
  itemRemoved = output<number>()


  ngOnChanges(): void {
    this.cartItems.set(this.productService.cartItems.length);
  }

  toggleCart() {
    this.activeCart = !this.activeCart;
  }

  toggleNav() {
    this.activeNav = !this.activeNav;
  }

  removeFromCart(id: number) {
    this.itemRemoved.emit(id)
  }
}
