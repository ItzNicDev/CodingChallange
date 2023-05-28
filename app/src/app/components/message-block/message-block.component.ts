import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, QueryList,
  SimpleChanges,
  ViewChild, ViewChildren
} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {HeaderComponent} from "../header/header.component";
import {DataService} from "../../services/data.service";
import {Subscription} from "rxjs";
import {parseJson} from "@angular/cli/src/utilities/json-file";

@Component({
  selector: 'message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css'],
  animations: [
    trigger('slide', [
      state('void', style({transform: 'translateX(-100%)', opacity: 0})),
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition(':enter', animate('250ms ease-out')),
    ]),

    trigger('drop', [
      state('void', style({transform: 'translateY(-100%)', opacity: 0})),
      state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition(':enter', animate('250ms ease-out')),
      transition(':leave', animate('400ms ease-in'))
    ])

  ]


})
export class MessageBlockComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren('testDiv') testDivs!: QueryList<ElementRef>;


  public list: string[] = ["box"];
  public textList: string[] = [];
  public counter: number = 1;
  public myVariable: string = "";
  private myVariableSubscription: Subscription;
  public colorTheme: string = "";
  public x: string = "";

  constructor(private dataService: DataService) {
    this.myVariableSubscription = this.dataService.getVariable().subscribe((value: string) => {
      this.myVariable = value;
    });

    this.colorTheme = localStorage.getItem("colorTheme") || '{}';

  }

  ngOnDestroy() {
    this.myVariableSubscription.unsubscribe();
  }


  addBox() {
    this.changeDivBackground();

    var currentdate = new Date();
    var datetime = currentdate.getDate() + "."
      + (currentdate.getMonth() + 1) + "."
      + currentdate.getFullYear() + " | "
      + currentdate.getHours() + ":"
      + currentdate.getMinutes();

    let textAreaElement: HTMLInputElement | null = document.getElementById('text-block',) as HTMLInputElement | null;
    let textFromTextArea = textAreaElement?.value.toString();


    this.counter = this.counter + 1;
    this.list.push("box");

    if (typeof textFromTextArea === "string") {
      this.textList.push(textFromTextArea);
    }

    console.log(this.list)
    localStorage.setItem("message-block-key", JSON.stringify(this.list));
  }

  deleteBoxes() {
    location.reload();
    // this.counter = [0];
  }

  public isOnMobile: boolean = false;
  public maxHeight: boolean = false;

  checkIfMobile() {
    let regexp = /android|iphone|kindle|ipad/i;
    this.isOnMobile = regexp.test(navigator.userAgent);
    console.log("user agent: " + this.isOnMobile);
  }

  ngOnInit() {

    this.list = JSON.parse(localStorage.getItem("message-block-key") || '{}');


    this.checkIfMobile();
    if (window.innerWidth <= 600) {
      this.maxHeight = true;
    } else {
      this.maxHeight = false;
    }
  }


  ngAfterViewInit() {
    this.changeDivBackground();
  }

  changeDivBackground() {

    let colorTheme = localStorage.getItem("colorTheme")
    console.log(colorTheme)

    let colorAlias = "white"
    if (colorTheme == "ocean") {
      colorAlias = "cyan"
    }if (colorTheme == "candy") {
      colorAlias = "pink"
    }if (colorTheme == "moonlight") {
      colorAlias = "lightyellow"}
    if (colorTheme == "skyline") {
      colorAlias = "royalblue"
    }if (colorTheme == "midnight") {
      colorAlias = "darkblue"
    }

    this.testDivs.forEach(div => {
      div.nativeElement.style.backgroundColor = colorAlias;
    });

  }

}


