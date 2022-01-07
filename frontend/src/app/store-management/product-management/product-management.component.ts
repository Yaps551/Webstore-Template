import { Component, Input, OnInit, ViewChild } from '@angular/core';
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

  notificationMessage = null;
  changesMade: boolean = false;

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
      this.product.createdAt,
      new Date(),
    );
    
    this.productDao.putProduct(updatedProduct)
    .subscribe(res => {
      this.notificationMessage = res.message;
    });
  }

  onDiscardChanges(form: NgForm): void {
    form.controls['name'].setValue(this.product.name);
    form.controls['description'].setValue(this.product.description);
    // TODO imageUrl

    this.changesMade = false;
  }
}
