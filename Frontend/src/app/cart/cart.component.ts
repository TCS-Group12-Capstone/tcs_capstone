import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  user: string = "failed to get username";
  cart: Array<Cart> = [];
  productDetail: Array<Product> = [];
  subtotal: Array<number> = [];
  total: number = 0.00;

  constructor(
    public cartService: CartService,
    public productService: ProductService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      data => {
        this.user = data.user;
        this.updateCartTable();
      })
  }

  updateCartTable() {
    this.cartService.getCart(this.user).subscribe(
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
      result => {
        this.productDetail = result;
        this.calSubtotal();
      },
      error => console.log(error)
    )
  }

  calSubtotal() {
    let i = 0;
    let tempTotal = 0;  // this local variable used when user delete a product

    this.subtotal = []; // delete old data, the new push will trigger Angular to redraw the table

    this.cart.forEach(product => {
      let productSubtotal = product.quantity * this.productDetail[i++].price;

      this.subtotal.push(productSubtotal);
      tempTotal += productSubtotal;
    })

    this.total = tempTotal; // update the total
  }

  checkout() {
    this.router.navigate(["checkout", this.user]);
  }

  deleteProductFromCart(product: Cart, i: number) {
    if (product.quantity == 1) {
      // remove the product out of the array
      this.productDetail.splice(i, 1);
      this.cart.splice(i, 1);
      this.subtotal.splice(i, 1);

      // if we only one product of this type, then delete the document from the database
      this.cartService.deleteCart(product).subscribe(
        result => console.log(result),
        error =>console.log(error)
      )
    } else { 
      product.quantity -= 1;

      // just decrement the quantity by one
      this.cartService.decrementCart(
        new Cart(this.user, product.productId, -1)
      ).subscribe(
        result => console.log(result),
        error => console.log(error)
      )
    }

    this.calSubtotal();
  }

}
