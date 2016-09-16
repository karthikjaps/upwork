import { Component } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { UserService, User } from '../../shared/shared'

@Component({
  templateUrl: 'build/pages/user/user.component.html'
})
export class UserComponent {
  private users$: Observable<User[]>;
  
  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private modal: ModalController
  ) {
  }

  ngOnInit() {
    // TODO: this needs to be more optimized
    this.userService.isAuthenticated()
      .then((res) => {
        if (!res)
          this.navCtrl.push(UserComponent)
        else 
          this.users$ = this.userService.getUserData()
      })
  }

  private itemTapped(event, item) {
    this.navCtrl.push(UserComponent, {
      item: item
    });
  }
}

