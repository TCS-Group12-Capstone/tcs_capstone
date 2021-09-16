import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orderList = [{
    userId: '',		// this is the field _id from the Account collection
    status: '',		// default is “placed”, can be other value
    tracking: '',
    productName: '',
    quantity: '',
    date: ''
  }]
  order: any;
  id: any;

  constructor(private orderStatus: OrderService, public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderStatus.getOrders().
      subscribe((result) => {
        console.log(result)
        this.orderList = result
        console.log(this.orderList);
      })
  }

  updateStatus() {
    // console.log("Updating user");
    // var id = this.actRoute.snapshot.paramMap.get('id');
    // // user service to update the user info.
    // this.orderStatus.updateOrderStatus(id, this.order).subscribe((response) => {
    //   console.log(response.message);
    //   console.log(this.order)
    //   alert(response.message);
    // });
  }

}
