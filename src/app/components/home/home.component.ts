import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  subscribitions!: Subscription
  constructor(private _NotificationSer:NotificationService){}
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
