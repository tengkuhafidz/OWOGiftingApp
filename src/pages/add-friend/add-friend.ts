import { Component } from '@angular/core';
import { IonicPage, Platform, NavParams, ViewController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-friend',
  templateUrl: 'add-friend.html',
})
export class AddFriendPage {
  firstName: string;
  mobileNumber: string;
  address: string;
  postalCode: string;

  constructor(public platform: Platform, public toastCtrl: ToastController, public params: NavParams, public viewCtrl: ViewController, public userServiceProvider: UserServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFriendPage');
  }

  addFriend() {
    this.userServiceProvider.addFriend(this.firstName, this.mobileNumber, this.address, this.postalCode)
      .then((data) => {
        console.log('addFriend', data);
        this.successToast();
        this.dismiss();
      })
  }

  successToast() {
    let toast = this.toastCtrl.create({
      message: 'Friend added successfully',
      duration: 3000
    });
    toast.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
