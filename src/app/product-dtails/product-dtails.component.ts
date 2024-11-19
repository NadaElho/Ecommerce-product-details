import {
  Component,
  computed,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Cart } from '../models/cart.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-dtails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-dtails.component.html',
  styleUrl: './product-dtails.component.css',
})
export class ProductDtailsComponent {
  cart = output<Cart>();
  activeImageNum = input<number>(1);
  numOfProducts = signal(0);
  products = inject(ProductsService);

  addToCart() {
    if (this.numOfProducts()) {
      const product = { count: this.numOfProducts(), id: this.productData.id };
      this.cart.emit(product);
      this.numOfProducts.set(0);
    }
  }

  onIncrement() {
    const incremented = computed(() => this.numOfProducts() + 1);
    this.numOfProducts.set(incremented());
  }

  onDecrement() {
    const decremented = computed(() => this.numOfProducts() - 1);
    if (decremented() >= 0) {
      this.numOfProducts.set(decremented());
    }
  }

  get productData() {
    return this.products.allProducts[this.activeImageNum() - 1];
  }
}
