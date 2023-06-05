import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  readonly usernameToCheck: string = "user";

  constructor(private router: Router) {
  }

  checkCookie(redirectRoute: string) {
    const cookies = document.cookie.split(";");
    const userCookie = cookies.find(cookie => {
      const [name] = cookie.trim().split("=");
      return name === this.usernameToCheck;
    });

    if (redirectRoute != "home") {
      if (!userCookie) {
        this.router.navigate([redirectRoute]);
      }
    }

    if (redirectRoute == "home") {
      if (userCookie) {
        this.router.navigate([redirectRoute]);
      }
    }
  }

  generateCookie(name: string, value: string, cookieExpiry: number, keepLoggedIn: boolean) {
    if (!keepLoggedIn) {
      const date = new Date();
      date.setTime(date.getTime() + (cookieExpiry * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
    if (keepLoggedIn) {
      const date = new Date();
      date.setTime(date.getTime() + (10000000000 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }
  }

  getCookieValue(name: string): any {


    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      // Check if the cookie starts with the specified name
      if (cookie.startsWith(name + '=')) {
        // Extract and return the cookie value
        return cookie.substring(name.length + 1);
      } else {
        return undefined
      }
    }

  }

  deleteCookie(name: string) {

    let value = this.getCookieValue(name);
    document.cookie = name + "=" + value + ";" + "expires=Thu, 01 Jan 1970 00:00:01 GMT" + ";path=/";
  }

  test(){
    return "test";
  }

  encrypt(clearText: string, key: string) {
    // return CryptoJS.AES.encrypt(clearTexxst, key).toString();
    const encryptedString = CryptoJS.AES.encrypt(clearText, key).toString();
    return encryptedString;
    // console.log(CryptoJS.AES.encrypt(clearText, key).toString());
  }

  decrypt(enryptedText: string, key:string) {
    const decryptedBytes = CryptoJS.AES.decrypt(enryptedText, key);
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
  }


}
