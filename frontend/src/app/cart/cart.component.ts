import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/models/product.model';
import { productDao } from 'src/shared/services/product-dao.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[];
  notificationMessage: string = null;

  constructor(private productDao: productDao) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productDao.getProducts()
    .subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.notificationMessage = err.statusText
    });
  }

}
