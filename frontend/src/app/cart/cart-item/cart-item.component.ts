import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartItem } from 'src/shared/models/cart-item.model';
import { CartDao } from 'src/shared/services/cart-dao.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartItem;
  @Output() itemDeleted = new EventEmitter<CartItem>();
  totalPrice: number;

  constructor(private cartDao: CartDao) { }

  ngOnInit(): void {
    let rawPrice = this.item.price * this.item.cartItem.quantity;
    this.totalPrice = Number.parseFloat(rawPrice.toFixed(2));
  }

  onChangeQuantity(form: NgForm): void {
    const newQuantity = form.value.quantity;

    if (newQuantity == 0) {
      this.cartDao.deleteProduct(this.item.cartItem._id)
      .subscribe(res => {
        return this.itemDeleted.emit(this.item);
      });
    }

    else if (newQuantity != this.item.cartItem.quantity) {
      this.cartDao.putCart({
        itemId: this.item.cartItem._id,
        quantity: newQuantity
      })
      .subscribe(res => {
        let rawPrice = this.item.price * newQuantity;
        this.totalPrice = Number.parseFloat(rawPrice.toFixed(2));
      })
    }

    return;
  }
}
