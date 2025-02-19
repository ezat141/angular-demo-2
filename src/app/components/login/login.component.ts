import { UserAuthService } from './../../services/user-auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isUserLogged: boolean;
  constructor(private userAuthService: UserAuthService){
    this.isUserLogged = this.userAuthService.getUserLogged();

  }

  login(){
    this.userAuthService.login()
    this.isUserLogged = this.userAuthService.getUserLogged()
  }

  logout(){
    this.userAuthService.logout()
    this.isUserLogged = this.userAuthService.getUserLogged()

  }
}
