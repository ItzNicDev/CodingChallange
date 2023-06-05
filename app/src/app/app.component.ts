import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  public initialBackgroundColor: string = document.body.style.backgroundColor;
  title = 'Coding Challenge';


  ngOnInit() {

    if(localStorage.getItem("appearance") == "darkmode") {
      document.body.style.backgroundColor = 'rgb(45,45,45)';
    }

    if(localStorage.getItem("appearance") == "brightmode") {
      document.body.style.backgroundColor = 'rgb(210,210,210)';
    }

  }

  protected readonly location = location;
}
