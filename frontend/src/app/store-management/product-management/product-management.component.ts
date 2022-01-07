import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/shared/models/product.model';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent implements OnInit {
  @Input() product: Product;

  changesMade: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChanges(): void {
    this.changesMade = true;
  }

  onSaveChanges(form: NgForm): void {
    console.log(form.value);
    //TODO 
  }

  onDiscardChanges(form: NgForm): void {
    form.controls['name'].setValue(this.product.name);
    form.controls['description'].setValue(this.product.description);
    // TODO imageUrl

    this.changesMade = false;
  }
}
