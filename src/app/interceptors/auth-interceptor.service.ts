import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export function authInterceptor(req:HttpRequest<any>, next:HttpHandlerFn){
  // console.log(req);
  let updatedReq=req
  if(req.method == 'POST'){
    updatedReq = req.clone({
      headers: req.headers.append('lang', 'en')
    });
    return next(updatedReq);
  }
  return next(updatedReq).pipe(
    tap((event) => {
      if(event.type==HttpEventType.Response){
        console.log('after interceptor', event);
        if(event.status==200){

        }else if(event.status==500){

        }
        
      }

    })
  );


}
