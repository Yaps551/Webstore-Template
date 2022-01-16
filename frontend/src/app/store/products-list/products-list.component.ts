import { Component, OnInit } from '@angular/core';
import { Product } from 'src/shared/models/product.model';
import { productDao } from 'src/shared/services/product-dao.service';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  errorMessage: string = null;
  isLoggedIn: boolean = false;

  constructor(private productDao: productDao, private userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn.getValue();
    this.getProducts();
  }

  private getProducts() {
    this.productDao.getProducts()
    .subscribe({
      next: products => { this.products = products; this.errorMessage = null },
      error: err => this.errorMessage = err.statusText,
    });
  }

}
