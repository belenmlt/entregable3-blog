import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginForm(user: UserModel): boolean {
    
    if (user.email === "aloha@posting.com" && user.password === "posting") {
      localStorage.setItem("auth", "true");
      return true;

    } else {
      return false;
    }
  } 

  isAuth(): boolean {
    if (localStorage.getItem("auth") === "true") {
      return true;
    } else {
      return false;
    }
  }
}
