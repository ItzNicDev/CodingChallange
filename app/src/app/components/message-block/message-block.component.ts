import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css']
})
export class MessageBlockComponent implements OnInit {
public counter: number[] = [0];

  addBox() {
    this.counter.push(0)
    console.log(this.counter)
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
