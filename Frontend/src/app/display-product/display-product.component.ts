import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../classes/cart';
import { Product } from '../classes/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  user: string = "phu@gmail.com";
  cartSize: number = 0;
  cart: Array<Cart> = [];
  products: Array<Product> = [];

  constructor(
    public router: Router,
    public productService: ProductService,
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      result => this.products = result,
      error => console.log(error)
    )

    this.updateCartSize();
  }

  updateCartSize() {
    this.cartService.getCart(this.user).subscribe(
      result => {this.showCartSize(result)},
      error => console.log()
    )
  }

  showCartSize(result: Cart[]) {
    result.forEach(product => {
      this.cartSize += product.quantity;
    })
  }

  addProductToCart(product: Product) {
    let selectedProduct = new Cart(this.user, product._id, 1);

    this.cartService.addCart(selectedProduct).subscribe(
      result => console.log(result),
      error => console.log(error)
    )

    this.updateCartSize();
  }

  goToCart() {
    this.router.navigate(["cart", this.user]);
  }

}
