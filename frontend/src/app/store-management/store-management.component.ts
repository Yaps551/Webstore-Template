import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { productDao } from 'src/shared/services/product-dao.service';
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.scss']
})
export class StoreManagementComponent implements OnInit {
  products: Product[] = [];
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
        this.notificationMessage = null;
      },
      error: err => this.notificationMessage = err.statusText
    });
  }

  productDeleted(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
    this.notificationMessage = "Product deleted successfully";
  }

  onCreateProduct(productForm: NgForm) {
    const formValues = productForm.value;

    const newProduct = {
      name: formValues.name,
      description: formValues.description,
      imageUrl: formValues.imageUrl,
      price: formValues.price
    }

    this.productDao.createProduct(newProduct)
    .subscribe({
      next: res => {
        this.products.push(res.product);
        productForm.reset();
        this.notificationMessage = res.message
      },
      error: err => this.notificationMessage = err.message
    }
    )
  }
}
