import { Component, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import {
  ionicBootstrap,
  Platform,
  Nav,
  NavController,
  ModalController
} from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { UserService } from './shared/shared/user/user.service';
import { AuthGaurdService } from './shared/shared/core/authgaurd';

import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { UserComponent } from './pages/user';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  private _subs: Array<Subscription> = [];
  private rootPage: any;
  private pages: Array<{ title: string, component: any }>;
  private navController: NavController;

  constructor(
    private platform: Platform,
    private userService: UserService,
    private modalCtrl: ModalController
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginComponent },
      { title: 'Home', component: HomeComponent }
    ];

    this.userService.isAuthenticated()
      .then((res: boolean) => {
        this.rootPage = res ? UserComponent : LoginComponent;
      })
  }

  ionViewWillUnload() {
    while (this._subs.length) this._subs.pop().unsubscribe();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

  }


}


ionicBootstrap(
  MyApp,
  [ UserService ]
);