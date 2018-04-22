import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the OrderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderServiceProvider {
  apiUrl = 'http://localhost:8080/OwoGifting-war/Resources';

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello OrderServiceProvider Provider');
  }

  getOrders() {
    return this.storage.get('user').then(user => {
      return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl+'/order/user/'+user.cUserName).subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
      });
    });
  }

  order(customerOrder) {
    console.log('TESSST', customerOrder)
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/order', customerOrder).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

}
