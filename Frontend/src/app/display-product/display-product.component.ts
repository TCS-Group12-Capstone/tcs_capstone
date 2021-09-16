import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../classes/cart';
import { Product } from '../classes/product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  username: string = "phu@gmail.com";
  userId: string = "no available userId";
  cartSize: number = 0;
  cart: Array<Cart> = [];
  products: Array<Product> = [];

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public productService: ProductService,
    public cartService: CartService,
    public userService: UsersService
  ) { }

  ngOnInit(): void {
    //this.activatedRoute.params.subscribe(data => this.username = data.user);

    this.userService.getUserId(this.username).subscribe(
      result => {
        this.userId = result._id;
        this.updateCartSize();
      },
      error => console.log(error)
    )

    this.productService.getAllProducts().subscribe(
      result => this.products = result,
      error => console.log(error)
    )
  }

  updateCartSize() {
    this.cartService.getCart(this.userId).subscribe(
      result => {this.showCartSize(result)},
      error => console.log(error)
    )
  }

  showCartSize(result: Cart[]) {
    result.forEach(product => {
      this.cartSize += product.quantity;
    })
  }

  addProductToCart(product: Product) {
    let selectedProduct = new Cart(this.userId, product._id, product.name, 1);

    this.cartSize += selectedProduct.quantity;

    this.cartService.addCart(selectedProduct).subscribe(
      result => console.log(result),
      error => console.log(error)
    )
  }

  goToCart() {
    this.router.navigate(["cart", this.userId]);
  }

}
