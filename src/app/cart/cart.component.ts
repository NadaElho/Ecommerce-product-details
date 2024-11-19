import {
  Component,
  inject,
  input,
  OnChanges,
  output,
  SimpleChanges,
} from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnChanges {
  productsService = inject(ProductsService);
  cartItems = this.productsService.cartItems;
  itemRemoved = output<number>();
  cartNumber = input<number>();

  ngOnChanges(): void {
    this.cartItems = this.productsService.cartItems;
  }

  removeFromCart(id: number) {
    this.productsService.removeFromCart(id);
    this.cartItems = this.productsService.cartItems;
    this.itemRemoved.emit(id);
  }
}
