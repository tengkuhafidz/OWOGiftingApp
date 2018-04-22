import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { OrderDetailsPage } from '../order-details/order-details';
import { OrderServiceProvider } from '../../providers/order-service/order-service';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  orders: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderServiceProvider: OrderServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter OrdersPage');
    this.getOrders();
  }

  getOrders() {
    this.orderServiceProvider.getOrders()
      .then(data => {
        this.orders = data;
      });
  }

  regift(event, gift) {
    console.log(gift);
  }

  chooseGift(event, gift) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(CheckoutPage, {
      gift: gift
    });
  }

  viewOrderDetails(event, order) {
    this.navCtrl.push(OrderDetailsPage, {
      order: order
    });
  }

}
