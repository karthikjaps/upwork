import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { UserService, UserComponent } from "../user";

@Component({
  templateUrl: 'build/pages/login/login.component.html'
})
export class LoginComponent {
  private username: string;
  private password: string;
  private erroMessage: string;

  constructor(
    private navCtrl: NavController,
    private userService: UserService
  ) {
  }

  login() {
    this.userService.doLogin(this.username, this.password).then((res: boolean) => {
      this.navigateToDashboardPage();
    }, (errRes) => {
      this.erroMessage = errRes;
    })
  }

  private navigateToDashboardPage() {
    this.navCtrl.push(UserComponent)
  }
}
