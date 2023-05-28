import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DataService} from "../../services/data.service";
import {MessageBlockComponent} from "../message-block/message-block.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({transform: 'translateY(-100%)', opacity: 0})),
      state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition(':enter', animate('400ms ease-out')),
      transition(':leave', animate('400ms ease-in'))
    ])
  ]
})
export class HeaderComponent {

  protected readonly location = location;
  public isMenuOpened: boolean = false;
  public colorTheme: string = "";

  constructor(private dataService: DataService) {
  }

  colorPicker(colorValue: string) {
    this.colorTheme = colorValue
    console.log("selected Color Theme: " + this.colorTheme);
    localStorage.setItem("colorTheme", colorValue)
    location.reload();

  }

  menubar() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  deleteAll() {
    const response = confirm("Delete All Notes?");
    console.log("answer: " + response);
    if (response == true) {
      localStorage.setItem("message-block-key", JSON.stringify(["box"]));
      location.reload()
    }
  }
}


