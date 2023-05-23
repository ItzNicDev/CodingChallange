import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-interline',
  templateUrl: './interline.component.html',
  styleUrls: ['./interline.component.css']
})
export class InterlineComponent {
public boxesAmount: number = 0;
 public counter: number[] = [1]




  addBox() {
    this.boxesAmount = this.boxesAmount + 1
    console.log(this.boxesAmount)

    this.counter.push(0);
    console.log(this.counter)
  }
}
