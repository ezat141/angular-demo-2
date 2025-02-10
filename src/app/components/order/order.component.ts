import { Component } from '@angular/core';
import { ProductsComponent } from "../products/products.component";
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [ProductsComponent, FormsModule, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories:Icategory[];
  selectedCatId:number = 0;
  recievedTotalPrice:number = 0;
  constructor() {
    this.categories=[
      {id:1,name:'Laptop'},
      {id:2,name:'Mobile'},
      {id:3,name:'Tablet'},
    ]
  }
  calcTotalPrice(top:number){
    this.recievedTotalPrice = top
  }


}
