import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/shared/models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;

  constructor() { }

  ngOnInit(): void {
  }

}
