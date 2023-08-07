import { Injectable } from '@angular/core';
import { CarItem } from '../models/cartItem';
import { CarItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() { }

  addToCart(product: Product) {
    let item = CarItems.find((c) => c.product.productId === product.productId);

    if (item) {
      item.quantity += 1;
    } else {
      let cartItem = new CarItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CarItems.push(cartItem);
    }
  }

  removeFromCart(product: Product) {
    let item: CarItem = CarItems.find((c) => c.product.productId === product.productId);
    CarItems.splice(CarItems.indexOf(item), 1);
  }


  list(): CarItem[] {
    return CarItems;
  }
}
