import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../classes/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  products: Array<Product> = [];

  constructor(
    public router: Router,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      result => {this.products = result},
      error => console.log(error)
    )
  }

  addProductToCart(product: Product) {

  }

  goToCart() {
    this.router.navigate(["cart"]);
  }

}
