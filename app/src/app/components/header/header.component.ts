import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DataService} from "../../services/data.service";
import {MessageBlockComponent} from "../message-block/message-block.component";
import {Router} from "@angular/router";

@Component({
  selector: 'header',
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
export class HeaderComponent implements OnInit {

  protected readonly location = location;
  public isMenuOpened: boolean = false;
  public colorTheme: string = "";
  private notesAmount: string | null = "";

  constructor(private dataService: DataService, private router: Router) {
  }

  logout() {
    this.dataService.deleteCookie("user");
    this.router.navigate(["login"]);
  }

  ngOnInit() {
  }

  colorPicker(colorValue: string) {
    this.colorTheme = colorValue
    console.log("selected Color Theme: " + this.colorTheme);
    localStorage.setItem("colorTheme", colorValue)
    location.reload();
  }

  appearanceSelection(value: string) {
    localStorage.setItem("appearance", value)
  }

  fontSize(value: string) {
    localStorage.setItem("font-size", value);
    location.reload()
  }

  menubar() {
    this.isMenuOpened = !this.isMenuOpened;
  }

  deleteAll() {
    this.notesAmount = localStorage.getItem("boxes-amount");

    let response: boolean = confirm("Delete All " + this.notesAmount + " Notes?");
    console.log("answer: " + response);
    if (response == true) {
      localStorage.setItem("message-block-key", JSON.stringify(["box"]));
      localStorage.setItem("boxes-amount", "1");
      location.reload()
    }
  }

  reportError() {
    this.router.navigate(["report"]);
  }

}
