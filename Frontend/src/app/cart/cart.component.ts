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

  username: string = "no username available";
  productDetail: Array<Product> = [];

  constructor(
    public cartService: CartService,
    public productService: ProductService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      data => {
        this.username = data.user;
        this.updateCartTable();
      })
  }

  updateCartTable() {
    // get the cart of the user
    this.cartService.getCart(this.username).subscribe(
      result => this.retrieveProductsDetail(result),
      error => console.log(error)
    )
  }

  retrieveProductsDetail(result: Cart[]) {
    let products : Array<string> = [];

    this.cartService.cart = result;

    // creating array of product ID to lookup for details
    result.forEach(product => {
      products.push(product.productId);
    })

    this.productService.getProducts(products).subscribe(
      result => {
        this.productDetail = result;
        this.calTotal();
      },
      error => console.log(error)
    )
  }

  calTotal() {
    let i = 0;
    let tempTotal = 0;  // this local variable used when user delete a product

    this.cartService.cart.forEach(product => {
      tempTotal += product.quantity * this.productDetail[i++].price;
    })

    this.cartService.total = tempTotal; // update the total
  }

  checkout() {
    this.router.navigate(["checkout", this.username]);
  }

  deleteProductFromCart(product: Cart, i: number) {
    if (product.quantity == 1) {
      // remove the product out of the array
      this.cartService.cart.splice(i, 1);

      // if we only one product of this type, then delete the document from the database
      this.cartService.deleteCart(product).subscribe(
        result => console.log(result),
        error =>console.log(error)
      )
    } else { 
      product.quantity -= 1;

      // just decrement the quantity by one
      this.cartService.decrementCart(
        new Cart(this.username, product.productId, this.productDetail[i].name, -1)
      ).subscribe(
        result => console.log(result),
        error => console.log(error)
      )
    }

    this.calTotal();
  }

}
