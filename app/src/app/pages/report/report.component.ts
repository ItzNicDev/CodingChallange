import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit, AfterViewInit {

  public name: string = "";
  public email: string = "";

  constructor(private dataService: DataService, private router: Router) {
  }

  sendFeedback(value: string) {

    this.dataService.checkCookie("login");
    console.log("sent feedback!")
    this.router.navigate(["login"]);
  }

  ngAfterViewInit() {
    this.dataService.checkCookie("login");
  }

  ngOnInit() {
    this.dataService.checkCookie("login");
  }


}
