import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/shared/models/product.model';
import { CartDao } from 'src/shared/services/cart-dao.service';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() isLoggedIn: boolean = false;

  constructor(private router: Router, private cartDao: CartDao) { }

  ngOnInit(): void {
  }

  onAddToCart() {
    if (this.isLoggedIn) {
      this.cartDao.addItem({
        productId: this.product._id
      })
      .subscribe(res => {
        return this.router.navigate(['cart']);
      }) 
    }
    
    this.router.navigate(['auth']);
  }
}
