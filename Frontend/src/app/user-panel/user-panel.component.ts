import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../classes/cart';
import { Product } from '../classes/product';
import { EmployeeService } from '../employee.service';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  email = "no available email";
  name = "no available name";
  userId: string = "no available userId";
  products: Array<Product> = [];
  cartSize: number = 0;
  cart: Array<Cart> = [];

  constructor(public activateRouter: ActivatedRoute,
    public router: Router,
    public allProducts: EmployeeService,
    public productService: ProductService,
    public userService: UsersService,
    public cartService: CartService) { }

  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe(data => {
      this.userService.getUserId(data.id).subscribe(
        result => {
          this.userId = result._id;
          this.name = result.fname + " " + result.lname; 
          this.email = data.id;
          this.updateCartSize();
        },
        error => console.log(error)
      )
    });

    this.allProducts.getAllProducts().
      subscribe(result =>
        this.products = result
        , error => console.log(error)
    );
  }

  updateCartSize() {
    this.cartService.getCart(this.userId).subscribe(
      result => { this.showCartSize(result) },
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

  logout(){
    this.router.navigate(["/userSignIn"]);
  }

  editProfile() {
    this.router.navigate(["/editUserProfile"], { queryParams: { email: this.email } });
  }

  funds() {
    this.router.navigate(["/userFunds"], { queryParams: { email: this.email } });
  }

  orderStatus() {
    this.router.navigate(["/tracking"]);
  }
}
