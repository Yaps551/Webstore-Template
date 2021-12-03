import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/models/product.model';
import { productDao } from 'src/shared/services/product-dao.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string = null;

  constructor(private productDao: productDao) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productDao.getProducts()
    .subscribe({
      next: products => { this.products = products; this.errorMessage = null },
      error: err => this.errorMessage = err.statusText,
      complete: () => {
        this.products.push(new Product('123124', 'Additional test product', 'Added programatically', null, null, null));
        this.products.push(new Product('123124', 'Additional test product', 'Added programatically', null, null, null));
        this.products.push(new Product('123124', 'Additional test product', 'Added programatically', null, null, null));
        this.products.push(new Product('123124', 'Additional test product', 'Added programatically', null, null, null));
        this.products.push(new Product('123124', 'Additional test product', 'Added programatically', null, null, null));
        this.products.push(new Product('123124', 'Additional test product', 'Added programatically', null, null, null));
      }
    });
  }

}
