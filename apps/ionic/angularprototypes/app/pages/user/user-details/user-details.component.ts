import { Component } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { LoginComponent } from '../../login'

import { AuthGaurdService, IUser } from '../../../shared/shared'

@Component({
  templateUrl: 'build/pages/user/user-details/user-details.component.html',
  providers : [ AuthGaurdService ]
})
export class UserDetailsComponent {
  private userDetails: IUser;
  
  constructor(
    private navParams: NavParams,
    private authService : AuthGaurdService
  ) {
  }

  ngOnInit() {
    this.authService.authenticate();
    this.userDetails = this.navParams.get('userDetails');
  }
}

