import { Component, inject, input, OnInit, output } from '@angular/core';
import { Cart } from '../models/cart.model';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent implements OnInit {
  cartItem = input<Cart>();
  itemRemoved = output<number>()
  productsService = inject(ProductsService);
  productData: Product | undefined;

  ngOnInit(): void {
    if (this.cartItem()) {
      this.productData = this.productsService.getProductById(
        this.cartItem()!.id
      );
    }
  }

  removeFromCart(id: number){
    this.itemRemoved.emit(id)
  }
}
