import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/shared/models/product.model';
import { CartDao } from 'src/shared/services/cart-dao.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private router: Router, private cartDao: CartDao) { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.cartDao.addItem({
      productId: this.product._id
    })
    .subscribe(res => {
      this.router.navigate(['cart']);
    })
  }
}
