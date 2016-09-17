import { Component } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { AuthGaurdService, DiagramComponent, IUser } from '../../../shared/shared';

@Component({
  templateUrl: 'build/pages/user/user-details/user-details.component.html',
  directives : [ DiagramComponent ],
  providers : [ AuthGaurdService ]
})
export class UserDetailsComponent {
  private userDetails: IUser;
  context:CanvasRenderingContext2D;
  
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
