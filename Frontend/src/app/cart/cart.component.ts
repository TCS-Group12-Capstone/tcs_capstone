import { Component, OnInit } from '@angular/core';
import { Cart } from '../classes/cart';
import { Product } from '../classes/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<Cart> = [];
  productDetail: Array<Product> = [];
  subtotal: Array<number> = [];
  total: number = 0.00;

  constructor(
    public cartService: CartService,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.cartService.getCart("123").subscribe(
      result => this.retrieveProductsDetail(result),
      error => console.log(error)
    )
  }

  retrieveProductsDetail(result: Cart[]) {
    let products : Array<string> = [];

    this.cart = result;

    // creating array of product ID to lookup for details
    result.forEach(product => {
      products.push(product.productId);
    })

    this.productService.getProducts(products).subscribe(
      result => this.calSubTotal(result),
      error => console.log(error)
    )
  }

  calSubTotal(result: Product[]) {
    let i = 0;
    this.productDetail = result;

    this.cart.forEach(product => {
      let productSubtotal = product.quantity * this.productDetail[i].price;

      this.subtotal.push(productSubtotal);
      this.total += productSubtotal;
    })
  }

}
