import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {  // Replace with your API URL

  constructor(private httpClient:HttpClient, private _UserAuthService:UserAuthService) { }

  getAllProducts(): Observable<Iproduct[]>{
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`,
      {
        headers:new HttpHeaders({
          "authorization":this._UserAuthService.getToken()
        })
      }
    )
  }

  getProductById(id:number): Observable<Iproduct>{
    return this.httpClient.get<Iproduct>(`${environment.baseUrl}/products/${id}`)
  }

  getProductsByCatId(catId:number): Observable<Iproduct[]>{
    let searchParams = new HttpParams()
    searchParams = searchParams.append('catId',catId)
    searchParams = searchParams.append('limit','10')
    return this.httpClient.get<Iproduct[]>(`${environment.baseUrl}/products`,
      {
        // params: new HttpParams().set('catId',catId)
        params: searchParams
      }
    )
  }

  addProduct(newPrd:Iproduct): Observable<Iproduct>{
    return this.httpClient.post<Iproduct>(`${environment.baseUrl}/products`,JSON.stringify(newPrd))
  }

  deleteProductById(id:number): Observable<Iproduct>{
    return this.httpClient.delete<Iproduct>(`${environment.baseUrl}/products/${id}`)
  }

  updateProductById(id:number, updatedPrd:Iproduct): Observable<Iproduct>{
    return this.httpClient.put<Iproduct>(`${environment.baseUrl}/products/${id}`,JSON.stringify(updatedPrd))
  }


}
