import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Fall Limited Edition Sneakers',
      price: 250.0,
      discount: 50,
      description:
        'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    },
    {
      id: 2,
      name: 'Summer Breeze Sneakers',
      price: 200.0,
      discount: 34,
      description:
        'Light and breathable, these sneakers are designed to keep you cool while providing superior comfort during the summer months.',
    },
    {
      id: 3,
      name: 'Classic Everyday Sneakers',
      price: 120.0,
      discount: 33,
      description:
        'A timeless design, perfect for daily wear. These sneakers offer comfort and durability for any casual occasion.',
    },
    {
      id: 4,
      name: 'Winter Waterproof Sneakers',
      price: 200.0,
      discount: 30,
      description:
        'Designed for the winter months, these waterproof sneakers are made to keep your feet warm and dry while maintaining a stylish look.',
    },
  ];

  private cart: Cart[] = [];

  addToCart(count: number, id: number) {
    const index = this.cart.findIndex((prd) => prd.id === id);

    const cartItems: Cart[] = [...this.cart];
    if (index !== -1) {
      cartItems[index].count = cartItems[index].count + count;
    } else {
      cartItems.push({ id, count });
    }
    this.cart = [...cartItems];
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter((item) => item.id !== id);
  }

  getProductById(id: number) {
    const index = this.products.findIndex((prd) => prd.id === id);
    return this.products[index];
  }

  get allProducts() {
    return this.products;
  }

  get cartItems() {
    return this.cart;
  }
}
