import {Component, OnInit} from '@angular/core';
import {Data, Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [
    trigger('slide', [
      state('void', style({transform: 'translateX(-100%)', opacity: 0})),
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition(':enter', animate('250ms ease-out')),
    ]),

    trigger('drop', [
      state('void', style({transform: 'translateY(-100%)', opacity: 0})),
      state('*', style({transform: 'translateY(0)', opacity: 1})),
      transition(':enter', animate('1200ms ease-out')),
    ])

  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isUsernameValid: boolean = true;
  public isPasswordValid: boolean = true;
  private cookieExpiry: number = 3; //in minutes

  public keepLoggedIn: boolean = false;

  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.dataService.checkCookie("home");
  }

  login(username: string, password: string) {

    this.dataService.generateCookie(username, password, 0.1, this.keepLoggedIn)

    if (username == null || username == "") {
      this.isUsernameValid = false;
    }
    if (password == null || password == "") {
      this.isPasswordValid = false;
    }
    if (username != "") {
      this.isUsernameValid = true;
    }
    if (password != "") {
      this.isPasswordValid = true;
    }
    if (username != "" && password != "") {
      this.router.navigate(['/home']);

    }
    localStorage.setItem("message-block-key", JSON.stringify([""]));
  }

  handleKey(event: any, username: string, password: string) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.login(username, password);
    }
  }
  keepLoggedin() {
    this.keepLoggedIn = !this.keepLoggedIn;
    console.log(this.keepLoggedIn)
  }

}
