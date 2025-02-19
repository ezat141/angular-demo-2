import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private authSubject:BehaviorSubject<boolean>;

  constructor() {
    this.authSubject = new BehaviorSubject<boolean>(false);
  }
  login(){
    localStorage.setItem('token', "gjigbjhvghyctrxtrxrtzxrzxg")
    this.authSubject.next(true);
  }
  logout(){
    localStorage.removeItem('token')
    this.authSubject.next(false);
  }

  getUserLogged():boolean{
    return localStorage.getItem('token')?true:false;
  }

  getAuthSubject():BehaviorSubject<boolean>{
    return this.authSubject;
  }

  getToken():any{
    return localStorage.getItem('token');
  }
}
