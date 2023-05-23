import {Component, Input} from '@angular/core';

@Component({
  selector: 'message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css']
})
export class MessageBlockComponent {
public counter: number[] = [0];

  addBox() {
    this.counter.push(0)
    console.log(this.counter)
  }
  deleteBoxes() {
    this.counter = [0];

  }
}
