import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({opacity: 1}))
      ])
    ])
  ]
})
export class HeaderComponent {

    protected readonly location = location;
    public isMenuOpened: boolean = false;


  menubar() {
    // console.log("no menu function yet!")
    this.isMenuOpened = !this.isMenuOpened;
    console.log(this.isMenuOpened)

  }

  deleteAll() {


    const response = confirm("Delete All Notes?");

    console.log("answer: " + response);

    if(response == true) {
      location.reload()
    }

  }
}
