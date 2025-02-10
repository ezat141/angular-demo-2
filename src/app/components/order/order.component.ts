import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
export class OrderComponent implements AfterViewInit{
  categories:Icategory[];
  selectedCatId:number = 0;
  recievedTotalPrice:number = 0;
  @ViewChild('userNameInp') myInp!:ElementRef;
  @ViewChild(ProductsComponent) productsComponent!:ProductsComponent;
  constructor() {
    this.categories=[
      {id:1,name:'Laptop'},
      {id:2,name:'Mobile'},
      {id:3,name:'Tablet'},
    ]
  }
  ngAfterViewInit(): void {
    this.myInp.nativeElement.value="Ezzat"
    console.log(this.productsComponent.totalOrderPrice)
  }
  calcTotalPrice(top:number){
    this.recievedTotalPrice = top
  }


}
