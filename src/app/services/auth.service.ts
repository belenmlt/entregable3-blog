import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginForm(user: UserModel): boolean {

    console.log("Datos introducidos", user);
    
    if (user.email === "prueba@prueba.com" && user.password === "1234") {
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
