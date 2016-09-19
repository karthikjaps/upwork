import { Injectable } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { UserService } from "./user.service";
import { LoginComponent } from "../login/login.component";


@Injectable()
export class AuthGuardService {

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
