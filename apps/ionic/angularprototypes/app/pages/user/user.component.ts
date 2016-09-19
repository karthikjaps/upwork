import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { UserDetailsComponent } from './user-details';

import { UserService, IUser, AuthGaurdService } from '../../shared/shared';

@Component({
  templateUrl: 'build/pages/user/user.component.html',
  providers : [ AuthGaurdService ]
})
export class UserComponent {
  private users$: Observable<IUser[]>;

  constructor(
    private navController: NavController,
    private userService: UserService,
    private authService: AuthGaurdService
  ) {
  }

  ngOnInit() {
    this.authService.authenticate();
    this.users$ = this.userService.getUserData();
  }

  onTap(data) {
    this.navController.push(UserDetailsComponent, {
      userDetails: data
    })
  }
}

