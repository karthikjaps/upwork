import { Component, ViewChild } from '@angular/core';

import {
  ionicBootstrap, Platform, Nav, NavController, ModalController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { UserService } from './shared/shared';
import { CognitoService } from "./shared/aws/cognito.service";
import { DynamoDBService } from "./shared/aws/dynamo.service";
import { ConfigProvider } from "./shared/aws/config";

import { HomeComponent } from './pages/home';
import { LoginComponent } from './pages/login';
import { UserComponent } from './pages/user';
import { AWSComponent } from './pages/aws';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  private rootPage: any = LoginComponent;
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
      { title: 'Home', component: HomeComponent },
      { title: 'AWS', component: AWSComponent }
    ];

    this.userService.isAuthenticated()
      .then((res: boolean) => {
        this.rootPage = res ? UserComponent : LoginComponent;
      })
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

const PROVIDERS = [
  UserService,
  DynamoDBService,
  CognitoService,
  ConfigProvider
];

ionicBootstrap(
  MyApp,
  PROVIDERS
);
