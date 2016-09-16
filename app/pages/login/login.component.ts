import { Component } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { NavController, Modal, ModalController } from 'ionic-angular';

import { UserComponent } from '../user';

import { UserService } from '../../shared/shared';


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

  ngOnInit() {
    this.userService.isAuthenticated()
      .then((res) => {
        if (res)
          this.userService.doLogout();
      })
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