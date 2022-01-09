import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/shared/models/product.model';
import { productDao } from 'src/shared/services/product-dao.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  @Input() product: Product;
  @Output() productDeleted = new EventEmitter<Product>();

  notificationMessage = null;
  changesMade: boolean = false;
  attemptingDelete: boolean = false;

  constructor(private productDao: productDao) { }

  ngOnInit(): void {
  }

  onChanges(): void {
    this.changesMade = true;
  }

  onSaveChanges(form: NgForm): void {
    const formValues = form.value;

    const updatedProduct = new Product(
      this.product._id,
      formValues.name,
      formValues.description,
      this.product.imageUrl, //FIXME include new imageUrl
      this.product.price,
      this.product.createdAt,
      new Date(),
    );
    
    this.productDao.putProduct(updatedProduct)
    .subscribe( {
      next: res => {
        this.notificationMessage = res.message;
        this.changesMade = false;
      },
      error: err => this.notificationMessage = err.message
    });
  }

  onDiscardChanges(form: NgForm): void {
    form.controls['name'].setValue(this.product.name);
    form.controls['description'].setValue(this.product.description);
    // form.controls['imageUrl'].setValue(this.product.imageUrl);
    form.controls['price'].setValue(this.product.price);

    this.changesMade = false;
  }

  onDelete() {
    this.attemptingDelete = true;
  }

  onConfirmDelete() {
    this.productDao.deleteProduct(parseInt(this.product._id))
    .subscribe({
      next: res => {
        this.productDeleted.emit(this.product);
      },
      error: err => this.notificationMessage = err.message
    });
  }

  onCancelDelete() {
    this.attemptingDelete = false;
  }
}
