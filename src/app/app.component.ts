import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { OrderComponent } from "./components/order/order.component";
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, OrderComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo-2';
  language$:Observable<string>
  dir:string = 'ltr'
  constructor(private store: Store<{language:string}>) {
    this.language$ =  this.store.select('language');
    this.language$.subscribe(lang => {
      this.dir = lang === 'en'? 'ltr' : 'rtl';
    });
  }
}
