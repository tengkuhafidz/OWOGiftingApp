import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  apiUrl = 'http://localhost:8080/OwoGifting-war/Resources';
  user: any;

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello UserServiceProvider Provider');
  }

  getUser() {
    return this.storage.get('user').then(user => {
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/user/'+user.cUserName).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    })
  }

  getUserFriends() {
    return this.storage.get('user').then(user => {
      return new Promise(resolve => {
        this.http.get(this.apiUrl+'/user/friends/'+user.cUserName).subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    })
  }

  login(cUserName: string, cPassword:string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/user/login', { cUserName: cUserName, cPassword: cPassword}).subscribe(data => {
        this.storage.set('user', data);
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  register(cName: string, cEmail: string, cUserName: string, cPassword:string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/user/register', { cName: cName, cEmail: cEmail, cUserName: cUserName, cPassword: cPassword}).subscribe(data => {
        this.storage.set('user', data)
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  addFriend(firstName: string, mobileNumber: string, address: string, postalCode:string) {
    return this.storage.get('user').then(user => {
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl+'/user/friend/'+user.cUserName, { firstName: firstName, mobileNumber: mobileNumber, address: address, postalCode: postalCode}).subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
      });
    })
  }
}
