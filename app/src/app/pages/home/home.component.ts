import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slide', [
      state('void', style({transform: 'translateX(-100%)', opacity: 0})),
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition(':enter', animate('450ms ease-out')),
    ]), trigger('drop', [
      state('void', style({transform: 'translateY(-100%)', opacity: 0})),
      state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition(':enter', animate('450ms ease-out')),
    ])
  ]
})
export class HomeComponent {

}
