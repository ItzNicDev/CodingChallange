import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [trigger('slide', [
    state('void', style({transform: 'translateX(-100%)', opacity: 0})),
    state('*', style({transform: 'translateX(0)', opacity: 1})),
    transition(':enter', animate('250ms ease-out')),
  ]),],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public isUsernameValid: boolean = true;
  public isPasswordValid: boolean = true;

  constructor(private router: Router) {
  }


  login(name: string, value: string) {
    document.cookie = name + "=" + value;

    if (name == null || name == "" || value == null || value == "") {

      if (name == null || name == "") {
        this.isUsernameValid = false;
      }

      if (value == null || value == "") {
        this.isPasswordValid = false;
      }

    } else {
      this.router.navigate(['/home']);

    }
  }
}
