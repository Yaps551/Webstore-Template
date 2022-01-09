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
  errorMessage: string = null;

  constructor(private productDao: productDao) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productDao.getProducts()
    .subscribe({
      next: products => {
        this.products = products;
        this.errorMessage = null;
      },
      error: err => this.errorMessage = err.statusText
    });
  }

  productDeleted(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
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
    .subscribe(res => {
      this.products.push(res.product);
      productForm.reset();
    })
  }
}
