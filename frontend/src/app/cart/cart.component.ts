import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/shared/models/cart-item.model';
import { CartDao } from 'src/shared/services/cart-dao.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: CartItem[];
  notificationMessage: string = null;

  constructor(private cartDao: CartDao) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.cartDao.getCart()
    .subscribe({
      next: items => {
        this.items = items;
      },
      error: err => this.notificationMessage = err.statusText
    });
  }

  itemDeleted(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}
