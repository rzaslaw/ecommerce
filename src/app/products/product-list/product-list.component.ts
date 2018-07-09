import { Component, OnInit } from '@angular/core';
import { Product } from "../../model/product";
import { ProductQuantityChange } from "../../model/product-quantity-change";

@Component({
  selector: 'app-product-list',
  template: `
    <app-product-item [product]="product"
                      (quantityChange)="onQuantityChange($event)"
                      *ngFor="let product of products"></app-product-item>
  `,
  styles: []
})
export class ProductListComponent implements OnInit {

  public products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Boots',
        imageUrl: 'boots.jfif',
        price: 89,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 2,
        name: 'Gloves',
        imageUrl: 'gloves.jfif',
        price: 25,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 3,
        name: 'Belt',
        imageUrl: 'belt.jfif',
        price: 15,
        isOnSale: false,
        quantityInCart: 0
      }
    ];
  }

  onQuantityChange(change: ProductQuantityChange) {
    const product = this.products.find(prod => {
      return change.product.id === prod.id;
    });
    product.quantityInCart += change.changeInQuantity;
  }
}
