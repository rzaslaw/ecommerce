import { Component, OnInit } from '@angular/core';
import { Product } from "../../model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  public products: Array<Product>;
  public count: Array<number>;

  constructor() { }



  addToCart(index) {
    this.products[index].quantityInCart++;
  }

  removeFromCart(index) {
    if (this.products[index].quantityInCart > 0) {
      this.products[index].quantityInCart--;
    }
  }

  ngOnInit() { 
    
    this.products = [
      {
        name: 'Boots',
        imageUrl: 'boots.jfif',
        price: 89,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        name: 'Gloves',
        imageUrl: 'gloves.jfif',
        price: 25,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        name: 'Belt',
        imageUrl: 'belt.jfif',
        price: 15,
        isOnSale: false,
        quantityInCart: 0
      }
    ];

    this.count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  }
 
}
