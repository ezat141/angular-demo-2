import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { languageAction } from '../../store/language/language.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  providers:[StaticProductsService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isUserLogged!: boolean;
  language$:Observable<string>
  currentLang!:string
  constructor(private userAuthService: UserAuthService, private store:Store<{language:string}>) {
    this.language$ = this.store.select("language")
    this.language$.subscribe((val)=>{
      this.currentLang = val;
    })



  }
  ngOnInit(): void {
    // this.isUserLogged = this.userAuthService.getUserLogged();
    this.userAuthService.getAuthSubject().subscribe({
      next:(status)=>{
        this.isUserLogged = status;
      },
    }
    )
  }

  changeLanguage(){

    this.store.dispatch(languageAction({lang:(this.currentLang == 'en')? 'ar' : 'en'}))

  }



}
