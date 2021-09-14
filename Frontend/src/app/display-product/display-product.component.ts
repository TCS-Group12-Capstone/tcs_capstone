import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../classes/product';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  products: Array<Product> = [];

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product) {

  }

  goToCart() {
    this.router.navigate(["cart"]);
  }

}
