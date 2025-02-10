import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import {CurrencyPipe} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HighlightCardDirective } from '../../directives/highlight-card.directive';
import { StaticProductsService } from '../../services/static-products.service';
import { Router } from '@angular/router';


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
  constructor(private _StaticProductsService: StaticProductsService, private router: Router ) {
    this.products = this._StaticProductsService.getAllProducts();

    this.filteredProducts=this.products

    this.onTotalPriceChanged = new EventEmitter<number>();

  }
  ngOnChanges(): void {
    this.filteredProducts = this._StaticProductsService.getProductsByCatId(this.recievedCatId);


  }

    buy(count:String, price:number){

      this.totalOrderPrice += +count * price;

      const product = this.products.find(p => p.price === price && p.quantity > 0);
      if (product) {
        product.quantity -= +count;
      }

      // 2-fire event
      this.onTotalPriceChanged.emit(this.totalOrderPrice);
    }

    navigateToDetails(id:number){
      // this.router.navigateByUrl('/Details/${id}');
      // Navigate to the product details page with the given id
      this.router.navigate(['/Details',id])

    }


    trackItem(index:number, item:Iproduct){
      return item.id;
    }







}
