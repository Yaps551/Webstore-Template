import { Component, OnInit } from '@angular/core';
import { productDao } from 'src/shared/services/product-dao.service';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.scss']
})
export class StoreManagementComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string = null;

  constructor(private productDao: productDao) { }

  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts() {
    this.productDao.getProducts()
    .subscribe({
      next: products => {
        this.products = products;
        this.errorMessage = null;
      },
      error: err => this.errorMessage = err.statusText
    });
  }

  RemoveProduct(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
  }
}
