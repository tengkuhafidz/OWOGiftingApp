import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { CheckoutSuccessPage } from '../checkout-success/checkout-success';
import { AlertController } from 'ionic-angular';
import { OrderServiceProvider } from '../../providers/order-service/order-service';
/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {
  order: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public orderServiceProvider: OrderServiceProvider, public alertCtrl: AlertController) {
    this.order = navParams.get('order')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
  }

  regift(order) {
    let alert = this.alertCtrl.create({
       title: `Confirmation`,
       subTitle: `Gift ${order.orderAddress.firstName} a ${order.oiList[0].product.pName} costing $${order.oiList[0].product.pPrice}0 again?`,
       buttons: ['Cancel', {
         text: 'Gift',
         handler: () => {
           this.confirmCheckout(order);
         }
      }]
     });
     alert.present();
  }

  confirmCheckout(order) {
    this.orderServiceProvider.order(order)
      .then((data) => {
        this.navCtrl.push(CheckoutSuccessPage);
      })
  }

  giftOthers(gift) {
    this.navCtrl.push(CheckoutPage, {
      gift: gift
    });
  }

}
