import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutSuccessPage } from '../checkout-success/checkout-success';
import { Storage } from '@ionic/storage';
import { UserServiceProvider } from '../../providers/user-service/user-service';
// import { GiftServiceProvider } from '../../providers/gift-service/gift-service';
import { AlertController } from 'ionic-angular';
import { OrderServiceProvider } from '../../providers/order-service/order-service';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  selectedGift: any;
  user: any = {};
  friends: any;
  cards: any;
  selectedFriend: any;
  selectedCard: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider: UserServiceProvider, public orderServiceProvider: OrderServiceProvider, public storage: Storage, public alertCtrl: AlertController) {
    this.selectedGift = navParams.get('gift');
    this.getUser();
    // this.setUserData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  checkout() {
    if(this.user && this.selectedCard && this.selectedFriend) {
      const order = {
        customer: this.user,
        oiList: [{
          product: this.selectedGift,
          oiAmount: this.selectedGift.pPrice,
          oiQty: 1
        }],
        orderAddress: this.selectedFriend
      };
      let alert = this.alertCtrl.create({
         title: `Confirmation`,
         subTitle: `Gift ${this.selectedFriend.firstName} a ${this.selectedGift.pName} costing $${this.selectedGift.pPrice}0?`,
         buttons: ['Cancel', {
           text: 'Gift',
           handler: () => {
             this.confirmCheckout(order);
           }
        }]
       });
       alert.present();
    } else {
      let alert = this.alertCtrl.create({
         title: 'Ooops',
         subTitle: 'You must select gift recipient and payment card to checkout.',
         buttons: ['OK']
       });
       alert.present();
    }
  }

  confirmCheckout(order) {
    this.orderServiceProvider.order(order)
      .then((data) => {
        this.navCtrl.push(CheckoutSuccessPage);
      })
  }

  getUser() {
    this.userServiceProvider.getUser()
      .then((data) => {
        this.user = data;
      })
  }

}
