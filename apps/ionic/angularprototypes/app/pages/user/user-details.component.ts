import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import {DiagramComponent} from "../../shared/shared/diagram/diagram.component";
import {AuthGuardService} from "./authguard.service";
import {IUser} from "./user.schema";

@Component({
  templateUrl: 'build/pages/user/user-details.component.html',
  directives : [ DiagramComponent ],
  providers : [ AuthGuardService ]
})
export class UserDetailsComponent {
  private userDetails: IUser;
  context:CanvasRenderingContext2D;

  constructor(
    private navParams: NavParams,
    private authService : AuthGuardService
  ) {
  }

  ngOnInit() {
    this.authService.authenticate();
    this.userDetails = this.navParams.get('userDetails');
  }
}
