import { Injectable } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { UserService } from '../user';

import { LoginComponent } from '../../../pages/login';

@Injectable()
export class AuthGaurdService {

  constructor(
    private userService: UserService,
    private navController: NavController,
    private modalController: ModalController
  ) {
  }

  authenticate() {
    this.userService.isAuthenticated().then((res: boolean) => {
      if (!res) {
        this.showLoginWindow();
      }
    })
  }

  private showLoginWindow() {
    let loginComponent = this.modalController.create(LoginComponent);
    this.navController.parent(loginComponent);
  }
}