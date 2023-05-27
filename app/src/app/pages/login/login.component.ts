import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
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
