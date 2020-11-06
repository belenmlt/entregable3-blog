import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginForm(data: NgForm) {
    const loginResult = this.auth.loginForm(this.user);

    if (loginResult) {
      this.router.navigateByUrl("/post");
    } else {
      alert("Usuario o contraseña incorrectos.")
    }
  }

}
