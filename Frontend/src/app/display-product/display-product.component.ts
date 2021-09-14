import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/product';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  products: Array<Product> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product) {

  }

  goToCart() {

  }

}
