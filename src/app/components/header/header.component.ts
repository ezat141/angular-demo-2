import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { StaticProductsService } from '../../services/static-products.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  providers:[StaticProductsService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isUserLogged!: boolean;
  constructor(private userAuthService: UserAuthService){



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



}
