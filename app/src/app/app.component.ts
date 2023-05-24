import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  title = 'Coding Challenge';

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
}
