import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/shared/models/product.model';
import { productDao } from 'src/shared/services/product-dao.service';
import { StoreOptionsService } from 'src/shared/services/store-options.service';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = null;
  errorMessage: string = null;
  isLoggedIn: boolean = false;
  filterSub: Subscription;

  constructor(private productDao: productDao, private userService: UserService, private storeService: StoreOptionsService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.userService.isLoggedIn.getValue();
    this.getProducts();
    this.handleSubscription();
  }

  ngOnDestroy(): void {
      this.filterSub.unsubscribe();
  }

  getProducts() {
    this.productDao.getProducts()
    .subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = products;
        this.errorMessage = null; 
      },
      error: err => this.errorMessage = err.statusText,
    });
  }

  handleSubscription(): void {
    this.filterSub = this.storeService.filter.subscribe(newFilter => {
      if (newFilter.length == 0) {
        this.filteredProducts = this.products;
        return;
      }

      this.filteredProducts = this.products.filter(product => 
        product.name.toLowerCase().includes(newFilter.toLowerCase()) ||
        product.description.toLowerCase().includes(newFilter.toLowerCase()));
    });
  }

}
