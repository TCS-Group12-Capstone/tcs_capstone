import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  products: Array<Product> = [
    new Product("1", "Apple", 12.99, 10),
    new Product("2", "Orange", 13.99, 10),
    new Product("3", "Banana", 12.99, 0),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product) {

  }

  goToCart() {
    
  }

}
