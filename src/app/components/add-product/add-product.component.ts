import { Component } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  categories: Icategory[];
  newProduct: Iproduct = {} as Iproduct;

  constructor(
    private _ApiProductService: ApiProductsService,
    private router: Router
  ) {
    this.categories = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Mobiles' },
    ];
  }

  addNewProduct() {
    this._ApiProductService.addProduct(this.newProduct).subscribe({
      next: (res) => {
        alert('Done');
        this.router.navigateByUrl('/Products');
        console.log('Product added successfully');
      },
      error: (err) => {
        console.log('Error adding product', err);
      },
    });
  }
}
