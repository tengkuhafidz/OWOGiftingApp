import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Storage } from '@ionic/storage';
import { FriendsPage } from '../friends/friends';
import { CardsPage } from '../cards/cards';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: any = {};
  friends: any = {};
  cards: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public userServiceProvider: UserServiceProvider, private storage: Storage, public alertCtrl: AlertController) {

  }

  getUser() {
    this.userServiceProvider.getUser()
      .then((data) => {

        this.user = data;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  ionViewWillEnter() {
    this.getUser();
  }

  viewFriends() {
    this.navCtrl.push(FriendsPage, {
      friends: this.user.addressList
    });
  }

  viewCards() {
    this.navCtrl.push(CardsPage, {
      cards: this.user.cardList
    });
  }

  logout() {
    let alert = this.alertCtrl.create({
       title: 'Logout',
       subTitle: 'Are you sure you want to logout?',
       buttons: ['Cancel', {
         text: 'Logout',
         handler: () => {
           this.storage.clear().then(() => this.navCtrl.setRoot(LoginPage))
         }
      }]
     });
     alert.present();

  }

}
