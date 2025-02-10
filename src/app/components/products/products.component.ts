import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import {CurrencyPipe} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';


@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule, HighlightCardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges{
  products:Iproduct[];
  filteredProducts:Iproduct[];
  totalOrderPrice:number = 0;
  num:number = 4
  myDATE:Date = new Date();

  // 1- define event
  @Output() onTotalPriceChanged: EventEmitter<number>
  @Input() recievedCatId:number=0;
  constructor() {
    this.products =[
      {id:100,name:"Dell laptop",price:500000,quantity:3,imgUrl:'https://fakeimg.pl/300/',catId:1},
      {id:200,name:"HP laptop",price:500000,quantity:0,imgUrl:'https://fakeimg.pl/300/',catId:1},
      {id:300,name:"Iphone",price:3054545,quantity:2,imgUrl:'https://fakeimg.pl/300/',catId:2},
      {id:400,name:"oppo ",price:60000,quantity:1,imgUrl:'https://fakeimg.pl/300/',catId:2},
      {id:500,name:"samsung tablet",price:20000,quantity:0,imgUrl:'https://fakeimg.pl/300/',catId:3},
      {id:600,name:"Lenovo tablet",price:10000,quantity:4,imgUrl:'https://fakeimg.pl/300/',catId:3}

    ]

    this.filteredProducts=this.products

    this.onTotalPriceChanged = new EventEmitter<number>();

  }
  ngOnChanges(): void {
    this.filterProducts();


  }

    buy(count:String, price:number){

      this.totalOrderPrice += +count * price;

      // 2-fire event
      this.onTotalPriceChanged.emit(this.totalOrderPrice);
    }

    trackItem(index:number, item:Iproduct){
      return item.id;
    }

    filterProducts(){
      if(this.recievedCatId==0){
        this.filteredProducts = this.products;
      } else{
        this.filteredProducts = this.products.filter(p => p.catId == this.recievedCatId);
      }
    }






}
