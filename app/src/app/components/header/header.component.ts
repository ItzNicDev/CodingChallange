import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', animate('400ms ease-out')),
      transition(':leave', animate('400ms ease-in'))
    ])



  ]
})
export class HeaderComponent implements OnInit{

    protected readonly location = location;
    public isMenuOpened: boolean = false;

    ngOnInit() {

    }

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
