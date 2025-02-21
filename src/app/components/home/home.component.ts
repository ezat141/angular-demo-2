import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { decrement, increment } from '../../store/counter/counter.action';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  counter:Observable<number>
  count!:number
  // subscribitions!: Subscription
  constructor(private _NotificationSer:NotificationService, private store:Store<{counter:number}>) {
    this.counter = this.store.select("counter");
    // this.counter.subscribe((newVal)=>{
    //   this.count =newVal;

    // })

  }

  increase(){
    this.store.dispatch(increment())
  }

  decrease(){
    this.store.dispatch(decrement())
  }
  // ngOnInit(): void {
  //   // this._NotificationSer.getNotifications().subscribe((notification) => {
  //   //   console.log(notification);

  //   // }, (error) => {
  //   //   console.log(`------------------------${error}------------`);
  //   // })

  //   this._NotificationSer.getNotifications().subscribe({
  //     next:(notification)=>{
  //       console.log(notification);
  //     },
  //     error:(err)=>{
  //       console.log(err)
  //     },
  //     complete:()=>{
  //       console.log("notification complete successfully");
  //     }
  //   })

  // }

  // ngOnDestroy(): void {
  //   this.subscribitions.unsubscribe();

  // }

}
