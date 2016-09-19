import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { AuthGuardService } from "./authguard.service";
import { IUser } from "./user.schema";
import { UserService } from "./user.service";
import { UserDetailsComponent } from "./user-details.component";

@Component({
  templateUrl: 'build/pages/user/user.component.html',
  providers : [ AuthGuardService ]
})
export class UserComponent {
  private users$: Observable<IUser[]>;

  constructor(
    private navController: NavController,
    private userService: UserService,
    private authService: AuthGuardService
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

