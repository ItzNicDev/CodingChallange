import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";


@Component({
  selector: 'message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('*', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', animate('200ms ease-out')),
      transition(':leave', animate('200ms ease-in'))
    ])
  ]
})
export class MessageBlockComponent implements OnInit {
public list: number[] = [1];
public counter: number = 1;


  addBox() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "."
      + (currentdate.getMonth()+1)  + "."
      + currentdate.getFullYear() + " | "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes()

    this.counter = this.counter + 1;
    this.list.push(this.counter)
    console.log(this.list)
  console.log(datetime)
  }
  deleteBoxes() {
    location.reload();
    // this.counter = [0];
  }

  public isOnMobile: boolean = false;
  checkIfMobile() {
    let regexp = /android|iphone|kindle|ipad/i;
    this.isOnMobile = regexp.test(navigator.userAgent);
    console.log("user agent: " + this.isOnMobile);
  }
  ngOnInit() {
    this.checkIfMobile()
  }
}
