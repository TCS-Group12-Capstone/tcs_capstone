import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import { ReportService } from '../services/report.service';
import { TrackingService } from '../services/tracking.service';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  userId: string = "no username available";
  userFund: number = 0.00;
  shipping: number = 10.00;
  tax: number = 10.00;
  total: number = 0.00;
  remainFund: number = 0.00;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public cartService: CartService,
    public userServive: UsersService,
    public productService: ProductService,
    public trackingService: TrackingService,
    public orderService: OrderService,
    public reportService: ReportService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => this.userId = data.user);
    this.userServive.getFund(this.userId).subscribe(
      result => {
        this.userFund = result.fund;
        this.total = this.cartService.total + this.shipping + this.tax;
        this.remainFund = this.userFund - this.total;
      },
      error => console.log(error)
    )
  }

  purchase() {
    let tracking = this.trackingService.generate(10);
    let date = new Date().toLocaleDateString();

    // charge the customer
    this.userServive.decreaseFund(
      { userId: this.userId, amount: this.total }
    ).subscribe(
      result => console.log(result),
      error => console.log(error)
    );

    this.cartService.cart.forEach(product => {
      // decrease the amount in-stock
      this.productService.decreaseAmount(
        { _id: product.productId, amount: product.quantity }
      ).subscribe(
        result => console.log(result),
        error => console.log(error)
      )

      // save to the Order collection
      this.orderService.create({
        userId: this.userId,
        status: "placed",
        tracking: tracking,
        productName: product.productName,
        quantity: product.quantity,
        date: date
      }).subscribe(
        result => console.log(result),
        error => console.log(error)
      )

      // insert a document for each copy
      for (let i = 0; i < product.quantity; i++) {
        // save to the Reports collection
        this.reportService.insertReport({
          itemId: product.productId,
          customerId: this.userId,
          date: date
        }).subscribe(
          result => console.log(result),
          error => console.log(error)
        )
      }

      // delete cart
      this.cartService.deleteCart(product).subscribe(
        result => console.log(result),
        error => console.log(error)
      )
    })

    this.router.navigate(["orderConfirmation", tracking]);
  }

}
