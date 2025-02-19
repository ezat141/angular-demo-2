import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification:string[];

  constructor() {
    this.notification = [
      'You have unread messages',
      'people reacting to your post',
      'Ezzat sent you a friend request',
      '',
      'post shared successfully',
    ];
  }

  getNotifications(): Observable<string>{
    // return from(this.notification);
    return new Observable<string>((observer) => {
      // observer.next();
      // observer.error()
      // observer.complete();

      let counter = 0;

      let notificationInterval = setInterval(()=>{
        console.log("test");
        if(counter == this.notification.length){
          observer.complete(); // stop
        }

        if(this.notification[counter] == ""){
          observer.error("this notification is empty"); //stop
        }
        observer.next(this.notification[counter])
        counter++
      }, 2000);

      return{
        unsubscribe:()=>{
          clearInterval(notificationInterval);

        }
      }

    })
  }
}
