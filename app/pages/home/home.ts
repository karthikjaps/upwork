import { Component } from '@angular/core';

import { RatingComponent } from '../../shared/rating'

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives : [
    RatingComponent
  ]
})
export class HomePage {
  private selectedRating: number;
}
