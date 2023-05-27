import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {HeaderComponent} from "../header/header.component";
import {DataService} from "../../services/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({transform: 'translateY(-100%)', opacity: 0})),
      state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition(':enter', animate('200ms ease-out')),
      transition(':leave', animate('200ms ease-in'))
    ])
  ]
})
export class MessageBlockComponent implements OnInit, OnDestroy {



  public list: number[] = [1];
  public textList: string[] = [];
  public counter: number = 1;
  public myVariable: string ="";
  private myVariableSubscription: Subscription;
public x: string ="";
  constructor(private dataService: DataService) {
    this.myVariableSubscription = this.dataService.getVariable().subscribe((value: string) => {
      this.myVariable = value;
    });

  }

  ngOnDestroy() {
    this.myVariableSubscription.unsubscribe();
  }


  addBox() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "."
      + (currentdate.getMonth() + 1) + "."
      + currentdate.getFullYear() + " | "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes();

    let textAreaElement: HTMLInputElement | null = document.getElementById('text-block',) as HTMLInputElement | null;
    let textFromTextArea = textAreaElement?.value.toString();


    this.counter = this.counter + 1;
    this.list.push(this.counter);

    // if (typeof textFromTextArea === "string") {
    //   this.textList.push(textFromTextArea);
    // }
    // console.log(this.textList)

    console.log(this.list)
    // console.log(datetime)
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
    this.checkIfMobile();

  }


}


