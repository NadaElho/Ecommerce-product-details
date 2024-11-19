import { Component, inject, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageContainerComponent } from './image-container/image-container.component';
import { ProductDtailsComponent } from './product-dtails/product-dtails.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products.service';
import { Cart } from './models/cart.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ImageContainerComponent,
    ProductDtailsComponent,
    PopUpComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  active = false;
  activeImageNumber = signal(1);
  cart = signal(0);
  productService = inject(ProductsService);

  onChange(active: boolean) {
    this.active = active;
  }

  handleData(number: number) {
    this.activeImageNumber.set(number);
  }

  addToCart(product: Cart) {
    this.cart.set(product.count);
    this.productService.addToCart(product.count, product.id);
  }

  removeFromCart() {
    this.cart.set(this.productService.cartItems.length);
  }
}
