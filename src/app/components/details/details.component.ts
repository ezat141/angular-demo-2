import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductsService } from '../../services/static-products.service';
import { Iproduct } from '../../models/iproduct';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent  implements OnInit{
  currentId:number = 0;
  product:Iproduct|null = null;
  constructor(private _activeRoute:ActivatedRoute, private _StaticProductsService:StaticProductsService){

  }
  ngOnInit(): void {
    this.currentId= Number(this._activeRoute.snapshot.paramMap.get('id'))
    this.product = this._StaticProductsService.getProductById(this.currentId);
  }

}
