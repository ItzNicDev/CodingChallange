import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Coding Challenge';

  // ngAfterViewInit() {
  //   document.getElementsByTagName()
  // }

  // public isOnMobile: boolean = false;
  //
  //
  //   checkIfMobile() {
  //     let regexp = /android|iphone|kindle|ipad/i;
  //     this.isOnMobile = regexp.test(navigator.userAgent);
  //     console.log("user agent: " + this.isOnMobile);
  //   }
  //   ngOnInit() {
  //     this.checkIfMobile()
  //   }
  protected readonly location = location;
}
