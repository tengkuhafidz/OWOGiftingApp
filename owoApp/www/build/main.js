webpackJsonp([11],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddFriendPage = /** @class */ (function () {
    function AddFriendPage(platform, toastCtrl, params, viewCtrl, userServiceProvider) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.userServiceProvider = userServiceProvider;
    }
    AddFriendPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddFriendPage');
    };
    AddFriendPage.prototype.addFriend = function () {
        var _this = this;
        this.userServiceProvider.addFriend(this.firstName, this.mobileNumber, this.address, this.postalCode)
            .then(function (data) {
            console.log('addFriend', data);
            _this.successToast();
            _this.dismiss();
        });
    };
    AddFriendPage.prototype.successToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Friend added successfully',
            duration: 3000
        });
        toast.present();
    };
    AddFriendPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddFriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-friend',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/add-friend/add-friend.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Add Friend\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text>Cancel</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #addFriendForm="ngForm" (ngSubmit)="addFriend()" autocomplete="off">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-item>\n            <ion-input placeholder="Name" name="name" id="nameField"\n                       type="text" required [(ngModel)]="firstName"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Mobile Number" name="mNumber" id="mNumberField"\n                       type="number" required [(ngModel)]="mobileNumber"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Address" name="aaddress" id="aaddressField"\n                       type="text" required [(ngModel)]="address" #username></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Postal Code" name="pCode" id="pCodeField"\n                       type="number" required [(ngModel)]="postalCode"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n        <button ion-button class="submit-btn" full type="submit"\n                [disabled]="!addFriendForm.form.valid">Add Friend\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n<ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/add-friend/add-friend.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], AddFriendPage);
    return AddFriendPage;
}());

//# sourceMappingURL=add-friend.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardsPage = /** @class */ (function () {
    function CardsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cards = navParams.get('cards');
    }
    CardsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardsPage');
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/cards/cards.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Cards</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let card of cards">\n      <ion-item>\n        <h2 [innerHTML]="card.caNumber"></h2>\n        <p [innerHTML]="card.caType"></p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deleteFriend($event, friend)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/cards/cards.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CardsPage);
    return CardsPage;
}());

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_friend_add_friend__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsPage = /** @class */ (function () {
    function FriendsPage(navCtrl, navParams, modalCtrl, userServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.userServiceProvider = userServiceProvider;
        this.friends = navParams.get('friends');
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FriendsPage');
    };
    FriendsPage.prototype.getUserFriends = function () {
        var _this = this;
        this.userServiceProvider.getUserFriends()
            .then(function (data) {
            _this.friends = data;
        });
    };
    FriendsPage.prototype.addFriend = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_friend_add_friend__["a" /* AddFriendPage */]);
        modal.onDidDismiss(function () {
            _this.getUserFriends();
        });
        modal.present();
    };
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/friends/friends.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>My Friends</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let friend of friends">\n      <ion-item>\n        <h2 [innerHTML]="friend.firstName"></h2>\n        <p><span [innerHTML]="friend.address"></span> <span [innerHTML]="friend.postalCode"></span></p>\n        <p [innerHTML]="friend.mobileNumber"></p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="deleteFriend($event, friend)">\n          <ion-icon name="trash"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab color="danger" (click)="addFriend()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/friends/friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_checkout__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_success_checkout_success__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_order_service_order_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the OrderDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailsPage = /** @class */ (function () {
    function OrderDetailsPage(navCtrl, navParams, orderServiceProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderServiceProvider = orderServiceProvider;
        this.alertCtrl = alertCtrl;
        this.order = navParams.get('order');
    }
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderDetailsPage');
    };
    OrderDetailsPage.prototype.regift = function (order) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Confirmation",
            subTitle: "Gift " + order.orderAddress.firstName + " a " + order.oiList[0].product.pName + " costing $" + order.oiList[0].product.pPrice + "0 again?",
            buttons: ['Cancel', {
                    text: 'Gift',
                    handler: function () {
                        _this.confirmCheckout(order);
                    }
                }]
        });
        alert.present();
    };
    OrderDetailsPage.prototype.confirmCheckout = function (order) {
        var _this = this;
        this.orderServiceProvider.order(order)
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkout_success_checkout_success__["a" /* CheckoutSuccessPage */]);
        });
    };
    OrderDetailsPage.prototype.giftOthers = function (gift) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__checkout_checkout__["a" /* CheckoutPage */], {
            gift: gift
        });
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-details',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/order-details/order-details.html"*/'<!--\n  Generated template for the OrderDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gift Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img [src]="\'http://localhost:8080/OwoGifting-war/images/assets/\' + order.order.oiList[0].product.pCategory + \'/\' + order.order.oiList[0].product.pId + \'-image.jpeg\'" width="100%"/>\n    <h3 [innerHTML]="order.order.oiList[0].product.pName" class="center"></h3>\n    <p class="center">$<span [innerHTML]="order.order.oiList[0].product.pPrice"></span>0</p>\n  <ion-list>\n    <ion-item>\n      <ion-label fixed><span style="color: #AAA">Gifted to</span></ion-label>\n      <ion-input type="text" [value]="order.order.orderAddress.firstName" disabled>{{order.order.orderAddress.firstName}}</ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>Gifted at</ion-label>\n      <ion-datetime displayFormat="DD MMMM YYYY" [(ngModel)]="order.tDate" disabled></ion-datetime>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block (click)="regift(order.order)" color="secondary">Repeat Gift</button>\n  <button ion-button block (click)="giftOthers(order.order.oiList[0].product)">Gift Others</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/order-details/order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_order_service_order_service__["a" /* OrderServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gifts_gifts__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, userServiceProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServiceProvider = userServiceProvider;
        this.storage = storage;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this.cName, this.cEmail, this.cUserName, this.cPassword) {
            this.userServiceProvider.register(this.cName, this.cEmail, this.cUserName, this.cPassword)
                .then(function (data) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__gifts_gifts__["a" /* GiftsPage */]);
            }).catch(function (error) {
                _this.error = "*Invalid registration";
            });
        }
        else {
            this.error = "*please fill in all fields";
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #registerForm="ngForm" (ngSubmit)="register()" autocomplete="off">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-item>\n            <ion-input placeholder="Name" name="name" id="nameField"\n                       type="text" required [(ngModel)]="cName" #username></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Email" name="email" id="emailField"\n                       type="email" required [(ngModel)]="cEmail"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Username" name="username" id="usernameField"\n                       type="text" required [(ngModel)]="cUserName" #username></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Password" name="password" id="passwordField"\n                       type="password" required [(ngModel)]="cPassword"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n        <button ion-button class="submit-btn" full type="submit"\n                [disabled]="!registerForm.form.valid">Register\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friends_friends__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cards_cards__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, userServiceProvider, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServiceProvider = userServiceProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.friends = {};
        this.cards = {};
    }
    ProfilePage.prototype.getUser = function () {
        var _this = this;
        this.userServiceProvider.getUser()
            .then(function (data) {
            _this.user = data;
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.getUser();
    };
    ProfilePage.prototype.viewFriends = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__friends_friends__["a" /* FriendsPage */], {
            friends: this.user.addressList
        });
    };
    ProfilePage.prototype.viewCards = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cards_cards__["a" /* CardsPage */], {
            cards: this.user.cardList
        });
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout',
            subTitle: 'Are you sure you want to logout?',
            buttons: ['Cancel', {
                    text: 'Logout',
                    handler: function () {
                        _this.storage.clear().then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]); });
                    }
                }]
        });
        alert.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item *ngIf="user">\n      <h1 class="center">{{user.cName}}</h1>\n      <h2 class="center">Username: {{user.cUserName}}</h2>\n      <h2 class="center">Email: {{user.cEmail}}</h2>\n      <br />\n  </ion-item>\n  <br />\n  <button ion-button block (click)="viewFriends()" color="primary-light">View Friends</button>\n  <button ion-button block (click)="viewCards()" color="primary-light">View Payment Cards</button>\n  <br />\n  <button ion-button block (click)="logout()" color="light">Logout</button>\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_checkout__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_order_service_order_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = /** @class */ (function () {
    function OrdersPage(navCtrl, navParams, orderServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderServiceProvider = orderServiceProvider;
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    OrdersPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter OrdersPage');
        this.getOrders();
    };
    OrdersPage.prototype.getOrders = function () {
        var _this = this;
        this.orderServiceProvider.getOrders()
            .then(function (data) {
            _this.orders = data;
        });
    };
    OrdersPage.prototype.regift = function (event, gift) {
        console.log(gift);
    };
    OrdersPage.prototype.chooseGift = function (event, gift) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__checkout_checkout__["a" /* CheckoutPage */], {
            gift: gift
        });
    };
    OrdersPage.prototype.viewOrderDetails = function (event, order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_details_order_details__["a" /* OrderDetailsPage */], {
            order: order
        });
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/orders/orders.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Past Gifts</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let order of orders">\n      <ion-item (click)="viewOrderDetails($event, order)">\n        <ion-thumbnail item-start>\n          <img [src]="\'http://localhost:8080/OwoGifting-war/images/assets/\' + order.order.oiList[0].product.pCategory + \'/\' + order.order.oiList[0].product.pId + \'-image.jpeg\'" class="gift-image"/>\n        </ion-thumbnail>\n        <h2 [innerHTML]="order.order.oiList[0].product.pName"></h2>\n        <p>For {{order.order.orderAddress.firstName}}</p>\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="primary" (click)="chooseGift($event, order.order.oiList[0].product)">\n          <ion-icon name="pricetag"></ion-icon>\n          Gift This\n        </button>\n        <button ion-button color="light" icon-start (click)="viewOrderDetails($event, order)">\n          <ion-icon name="ios-more"></ion-icon>\n          More\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_order_service_order_service__["a" /* OrderServiceProvider */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 125:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-friend/add-friend.module": [
		294,
		10
	],
	"../pages/cards/cards.module": [
		295,
		9
	],
	"../pages/checkout-success/checkout-success.module": [
		298,
		8
	],
	"../pages/checkout/checkout.module": [
		296,
		7
	],
	"../pages/friends/friends.module": [
		297,
		6
	],
	"../pages/gifts/gifts.module": [
		299,
		5
	],
	"../pages/login/login.module": [
		301,
		4
	],
	"../pages/order-details/order-details.module": [
		300,
		3
	],
	"../pages/orders/orders.module": [
		303,
		2
	],
	"../pages/profile/profile.module": [
		302,
		1
	],
	"../pages/register/register.module": [
		304,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GiftServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GiftServiceProvider = /** @class */ (function () {
    function GiftServiceProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:8080/OwoGifting-war/Resources';
        console.log('Hello GiftServiceProvider Provider');
    }
    GiftServiceProvider.prototype.getGiftSuggestions = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/gift').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    GiftServiceProvider.prototype.order = function (customerOrder) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/order', customerOrder).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    GiftServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GiftServiceProvider);
    return GiftServiceProvider;
}());

//# sourceMappingURL=gift-service.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_list_list__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gifts_gifts__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_order_details_order_details__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_checkout_checkout__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_success_checkout_success__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_friends_friends__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cards_cards__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_add_friend_add_friend__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_user_service_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_gift_service_gift_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_order_service_order_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_gifts_gifts__["a" /* GiftsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_success_checkout_success__["a" /* CheckoutSuccessPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_friend_add_friend__["a" /* AddFriendPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cards_cards__["a" /* CardsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-friend/add-friend.module#AddFriendPageModule', name: 'AddFriendPage', segment: 'add-friend', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout-success/checkout-success.module#CheckoutSuccessPageModule', name: 'CheckoutSuccessPage', segment: 'checkout-success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gifts/gifts.module#GiftsPageModule', name: 'GiftsPage', segment: 'gifts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_gifts_gifts__["a" /* GiftsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_success_checkout_success__["a" /* CheckoutSuccessPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_add_friend_add_friend__["a" /* AddFriendPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cards_cards__["a" /* CardsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_gift_service_gift_service__["a" /* GiftServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_order_service_order_service__["a" /* OrderServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_gifts_gifts__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_orders_orders__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        storage.get('user').then(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_gifts_gifts__["a" /* GiftsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
            }
        });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Suggested Gifts', component: __WEBPACK_IMPORTED_MODULE_4__pages_gifts_gifts__["a" /* GiftsPage */] },
            { title: 'Past Gifts', component: __WEBPACK_IMPORTED_MODULE_5__pages_orders_orders__["a" /* OrdersPage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n  <p>If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.</p>\n  <button ion-button menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiUrl = 'http://localhost:8080/OwoGifting-war/Resources';
        console.log('Hello UserServiceProvider Provider');
    }
    UserServiceProvider.prototype.getUser = function () {
        var _this = this;
        return this.storage.get('user').then(function (user) {
            return new Promise(function (resolve) {
                _this.http.get(_this.apiUrl + '/user/' + user.cUserName).subscribe(function (data) {
                    resolve(data);
                }, function (err) {
                    console.log(err);
                });
            });
        });
    };
    UserServiceProvider.prototype.getUserFriends = function () {
        var _this = this;
        return this.storage.get('user').then(function (user) {
            return new Promise(function (resolve) {
                _this.http.get(_this.apiUrl + '/user/friends/' + user.cUserName).subscribe(function (data) {
                    resolve(data);
                }, function (err) {
                    console.log(err);
                });
            });
        });
    };
    UserServiceProvider.prototype.login = function (cUserName, cPassword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/user/login', { cUserName: cUserName, cPassword: cPassword }).subscribe(function (data) {
                _this.storage.set('user', data);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.register = function (cName, cEmail, cUserName, cPassword) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/user/register', { cName: cName, cEmail: cEmail, cUserName: cUserName, cPassword: cPassword }).subscribe(function (data) {
                _this.storage.set('user', data);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    UserServiceProvider.prototype.addFriend = function (firstName, mobileNumber, address, postalCode) {
        var _this = this;
        return this.storage.get('user').then(function (user) {
            return new Promise(function (resolve, reject) {
                _this.http.post(_this.apiUrl + '/user/friend/' + user.cUserName, { firstName: firstName, mobileNumber: mobileNumber, address: address, postalCode: postalCode }).subscribe(function (data) {
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_success_checkout_success__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_order_service_order_service__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { GiftServiceProvider } from '../../providers/gift-service/gift-service';


/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams, userServiceProvider, orderServiceProvider, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServiceProvider = userServiceProvider;
        this.orderServiceProvider = orderServiceProvider;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.selectedGift = navParams.get('gift');
        this.getUser();
        // this.setUserData();
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    CheckoutPage.prototype.checkout = function () {
        var _this = this;
        if (this.user && this.selectedCard && this.selectedFriend) {
            var order_1 = {
                customer: this.user,
                oiList: [{
                        product: this.selectedGift,
                        oiAmount: this.selectedGift.pPrice,
                        oiQty: 1
                    }],
                orderAddress: this.selectedFriend
            };
            var alert_1 = this.alertCtrl.create({
                title: "Confirmation",
                subTitle: "Gift " + this.selectedFriend.firstName + " a " + this.selectedGift.pName + " costing $" + this.selectedGift.pPrice + "0?",
                buttons: ['Cancel', {
                        text: 'Gift',
                        handler: function () {
                            _this.confirmCheckout(order_1);
                        }
                    }]
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Ooops',
                subTitle: 'You must select gift recipient and payment card to checkout.',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    CheckoutPage.prototype.confirmCheckout = function (order) {
        var _this = this;
        this.orderServiceProvider.order(order)
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__checkout_success_checkout_success__["a" /* CheckoutSuccessPage */]);
        });
    };
    CheckoutPage.prototype.getUser = function () {
        var _this = this;
        this.userServiceProvider.getUser()
            .then(function (data) {
            _this.user = data;
        });
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/checkout/checkout.html"*/'<!--\n  Generated template for the CheckoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>  {{ selectedGift.pName }}\n</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list radio-group [(ngModel)]="selectedFriend">\n    <ion-list-header>\n      Gift To\n    </ion-list-header>\n    <div *ngIf="user.addressList && user.addressList?.length">\n      <ion-item  *ngFor="let friend of user.addressList">\n        <ion-label>{{friend.firstName}}</ion-label>\n        <ion-radio [value]="friend"></ion-radio>\n      </ion-item>\n    </div>\n    <p *ngIf="!user.addressList || !user.addressList?.length" class="emptyStateMessage">No friends added. You may add your friends via the profile section of this app. </p>\n  </ion-list>\n  <ion-list radio-group [(ngModel)]="selectedCard">\n    <ion-list-header>\n      Pay with\n    </ion-list-header>\n    <div *ngIf="user.cardList && user.cardList?.length">\n      <ion-item *ngFor="let card of user.cardList">\n        <ion-label>{{card.caNumber}}</ion-label>\n        <ion-radio [value]="card"></ion-radio>\n      </ion-item>\n    </div>\n    <p *ngIf="!user.cardList && !user.cardList?.length" class="emptyStateMessage">No payment cards available. Please add a valid payment card via <a href="http://localhost:8080/OwoGifting-war/" target="_blank">our website</a>. </p>\n  </ion-list>\n\n  <button ion-button block (click)="checkout()" [disabled]="!user.cardList?.length || !user.addressList?.length">Confirm Gift</button>\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_order_service_order_service__["a" /* OrderServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiftsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_checkout__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_gift_service_gift_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GiftsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GiftsPage = /** @class */ (function () {
    function GiftsPage(navCtrl, navParams, giftServiceProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.giftServiceProvider = giftServiceProvider;
        this.storage = storage;
        this.getGiftSuggestions();
    }
    GiftsPage.prototype.getGiftSuggestions = function () {
        var _this = this;
        this.giftServiceProvider.getGiftSuggestions()
            .then(function (data) {
            _this.gifts = data;
        });
    };
    GiftsPage.prototype.refreshGifts = function () {
        this.getGiftSuggestions();
    };
    GiftsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GiftsPage');
    };
    GiftsPage.prototype.chooseGift = function (event, gift) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__checkout_checkout__["a" /* CheckoutPage */], {
            gift: gift
        });
    };
    GiftsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gifts',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/gifts/gifts.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Suggested Gifts</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="refreshGifts()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-slides pager>\n    <ion-slide *ngFor="let gift of gifts">\n      <img [src]="\'http://localhost:8080/OwoGifting-war/images/assets/\' + gift.pCategory + \'/\' + gift.pId + \'-image.jpeg\'" class="gift-image"/>\n      <h2 class="gift-title" [innerHTML]="gift.pName"></h2>\n        <p>$ <span [innerHTML]="gift.pPrice"></span>0</p>\n      <button ion-button class="gift-button" (click)="chooseGift($event, gift)">Gift This</button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/gifts/gifts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_gift_service_gift_service__["a" /* GiftServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], GiftsPage);
    return GiftsPage;
}());

//# sourceMappingURL=gifts.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the OrderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OrderServiceProvider = /** @class */ (function () {
    function OrderServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiUrl = 'http://localhost:8080/OwoGifting-war/Resources';
        console.log('Hello OrderServiceProvider Provider');
    }
    OrderServiceProvider.prototype.getOrders = function () {
        var _this = this;
        return this.storage.get('user').then(function (user) {
            return new Promise(function (resolve, reject) {
                _this.http.get(_this.apiUrl + '/order/user/' + user.cUserName).subscribe(function (data) {
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    OrderServiceProvider.prototype.order = function (customerOrder) {
        var _this = this;
        console.log('TESSST', customerOrder);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/order', customerOrder).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    OrderServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], OrderServiceProvider);
    return OrderServiceProvider;
}());

//# sourceMappingURL=order-service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CheckoutSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutSuccessPage = /** @class */ (function () {
    function CheckoutSuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CheckoutSuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutSuccessPage');
    };
    CheckoutSuccessPage.prototype.backToRoot = function () {
        this.navCtrl.popToRoot();
    };
    CheckoutSuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout-success',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/checkout-success/checkout-success.html"*/'<!--\n  Generated template for the CheckoutSuccessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="successPage">\n  <h3>Gifted Successfully!</h3>\n  <p>Thank you for making the world a lil happier OwO</p>\n\n  <img src="assets/imgs/success.png"/>\n\n  <button ion-button block (click)="backToRoot()">Continue</button>\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/checkout-success/checkout-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CheckoutSuccessPage);
    return CheckoutSuccessPage;
}());

//# sourceMappingURL=checkout-success.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gifts_gifts__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, userServiceProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userServiceProvider = userServiceProvider;
        this.storage = storage;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.userServiceProvider.login(this.cUserName, this.cPassword)
            .then(function (data) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__gifts_gifts__["a" /* GiftsPage */]);
        }).catch(function (error) {
            _this.error = "*Invalid username or password";
        });
    };
    LoginPage.prototype.goToSignUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form #loginForm="ngForm" (ngSubmit)="login()" autocomplete="off">\n    <ion-row>\n      <ion-col>\n        <ion-list inset>\n          <ion-item>\n            <ion-input placeholder="Username" name="username" id="loginField"\n                       type="text" required [(ngModel)]="cUserName" #username></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Password" name="password" id="passwordField"\n                       type="password" required [(ngModel)]="cPassword"></ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n        <button ion-button class="submit-btn" full type="submit"\n                [disabled]="!loginForm.form.valid">Login\n        </button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <p class="signUpPara">No account yet? <a (click)="goToSignUpPage()">Register</a>.</p>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/tengkuhafidz/Desktop/Projects/IS3106 - OWO Gifting/IS3106/owoApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map