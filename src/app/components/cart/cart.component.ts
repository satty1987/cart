import { Component, OnInit, ElementRef, DoCheck } from '@angular/core';
import { CART_DATA } from '../cart-data/cart-contant';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {
  public cartObject = CART_DATA.productsInCart;
  public cartDiscount: Number = 7;
  public subTotal: Number = 0;
  public estimate: Number = 0;
  public isOpen: Boolean = false;
  public cartCount: Number = 0;
  public discount: Number= 0;
  public coupon: String= 'JEF10';
  public couponCode: any = {};
  public showpromocode: Boolean = true;
  public modelContent: any = { };
  constructor() {}

  ngOnInit() {

    console.log(this.cartObject);
    this.couponCode = {
      'coupon1': 8,
      'coupon2': 10,
      'coupon3': 15,
      'coupon4': 20,
    };
  }
  public cartTotal() {
    this.cartCount = _.sumBy(this.cartObject, 'p_quantity');
    this.subTotal = _.sumBy(this.cartObject, function(o) {
      return o.p_price * o.p_quantity;
    });
    if ( this.cartCount <= 3 ) {
      this.discount = 5;
       this.subTotal = Number(this.subTotal) - (Number(this.subTotal) * 0.05);
      } else if (this.cartCount > 3 && this.cartCount <= 6  ) {
        this.discount = 10;
       this.subTotal = Number(this.subTotal) - (Number(this.subTotal) * 0.10);
     }else {
       this.discount = 25;
       this.subTotal = Number(this.subTotal) - (Number(this.subTotal) * 0.25);
     }
  }
  public estimateTotal() {
    this.estimate = Number(this.subTotal) - Number(this.cartDiscount);
  }
  edit(item, index) {
    this.isOpen = true;
    this.modelContent = item;
    this.modelContent.selectedIndex = index;
  }
  onChangeQty(qty: Number, index: any) {
    console.log('change');
  }
  closeModal() {
  this.isOpen = false;
  }

  applyCoupon(coupon: any ) {
   this.cartDiscount = this.couponCode[coupon] ? this.couponCode[coupon] : 0 ;
   this.showpromocode = this.cartDiscount > 0 ? true : false;
   this.coupon = coupon;
    }

  updateCart(qty, size, index) {
  this.cartObject[index].p_quantity = +qty;
  const slitSize = size.split('|');
  this.cartObject[index].p_selected_size.code = slitSize[0];
  this.cartObject[index].p_selected_size.name = slitSize[1];
  this.isOpen = false;
  }
removeCartItem(index, item) {
this.cartObject.splice(index , 1 );

}
ngDoCheck() {
  this.cartTotal();
  this.estimateTotal();
  }
}
