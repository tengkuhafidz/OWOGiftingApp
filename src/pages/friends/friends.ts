import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AddFriendPage } from '../add-friend/add-friend';
import { UserServiceProvider } from '../../providers/user-service/user-service';



/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  friends: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public userServiceProvider: UserServiceProvider) {
    this.friends = navParams.get('friends');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

  getUserFriends() {
    this.userServiceProvider.getUserFriends()
      .then((data) => {
        this.friends = data;
      });
  }

  addFriend() {
    let modal = this.modalCtrl.create(AddFriendPage);
    modal.onDidDismiss(() => {
      this.getUserFriends();
    });
    modal.present();
  }

}
