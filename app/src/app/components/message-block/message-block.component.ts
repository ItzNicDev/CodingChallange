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
import {Router} from "@angular/router";

@Component({
  selector: 'message-block',
  templateUrl: './message-block.component.html',
  styleUrls: ['./message-block.component.css'],
  animations: [
    trigger('slide', [
      state('void', style({transform: 'translateX(-100%)', opacity: 0})),
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition(':enter', animate('250ms ease-out')),
    ]), trigger('drop', [
      state('void', style({transform: 'translateY(-100%)', opacity: 0})),
      state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition(':enter', animate('250ms ease-out')),
      transition(':leave', animate('400ms ease-in'))
    ])
  ]
})
export class MessageBlockComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChildren('messageBlock') messageBlock!: QueryList<ElementRef>;
  @ViewChildren('textArea') textArea!: QueryList<ElementRef>;


  public list: string[] = ["box"];
  public textList: string[] = [];
  public counter: number = 1;
  public myVariable: string = "";
  public colorTheme: string = "";
  public x: string = "";

  constructor(private dataService: DataService, private router: Router) {


  }

  ngOnDestroy() {
  }

  addBox() {
    this.dataService.checkCookie("login")
    this.changeDivBackground();


    let textAreaElement: HTMLInputElement | null = document.getElementById('text-block',) as HTMLInputElement | null;
    let textFromTextArea = textAreaElement?.value.toString();


    this.counter = this.counter + 1;
    localStorage.setItem("boxes-amount", this.counter.toString());
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

  // checkIfMobile() {
  //   let regexp = /android|iphone|kindle|ipad/i;
  //   this.isOnMobile = regexp.test(navigator.userAgent);
  //   console.log("user agent: " + this.isOnMobile);
  // }

  ngOnInit() {
    this.dataService.checkCookie("login");

    this.list = JSON.parse(localStorage.getItem("message-block-key") || '{}');

    // this.checkIfMobile();
    if (window.innerWidth <= 600) {
      this.maxHeight = true;
    } else {
      this.maxHeight = false;
    }
  }

  ngAfterViewInit() {
    this.dataService.checkCookie("login");
    this.changeDivBackground();
    this.changeFontSize()

  }

  changeFontSize() {
    this.dataService.checkCookie("login");

    let fontSize = localStorage.getItem("font-size")
    console.log(fontSize);
    this.textArea.forEach(div => {
      div.nativeElement.style.fontSize = fontSize + "px";
    });
  }

  changeDivBackground() {
    this.dataService.checkCookie("login");

    let colorTheme = localStorage.getItem("colorTheme")
    console.log(colorTheme)

    let colorAlias = "white"
    if (colorTheme == "ocean") {
      colorAlias = "#29c9b2"
    }
    if (colorTheme == "candy") {
      colorAlias = "#b64796"
    }
    if (colorTheme == "moonlight") {
      colorAlias = "#FFF59D"
    }
    if (colorTheme == "skyline") {
      colorAlias = "#3e83cb"
      this.textArea.forEach(div => {
        div.nativeElement.style.color = "white";
      });
    }
    if (colorTheme == "midnight") {
      colorAlias = "#29384d"
      this.textArea.forEach(div => {
        div.nativeElement.style.color = "white";
      });
    }

    this.messageBlock.forEach(div => {
      div.nativeElement.style.backgroundColor = colorAlias;
    });
  }

}


