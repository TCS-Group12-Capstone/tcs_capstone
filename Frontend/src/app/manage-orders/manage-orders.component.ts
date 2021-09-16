import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  orderList = [{
    _id: '',
    userId: '',		// this is the field _id from the Account collection
    status: '',		// default is “placed”, can be other value
    tracking: '',
    productName: '',
    quantity: '',
    date: ''
  }]

  constructor(private orderStatus: OrderService, public actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.orderStatus.getOrders().
      subscribe((result) => {
        console.log(result)
        this.orderList = result
        console.log(this.orderList);
      })
  }

  updateStatus(id: any, formData: NgForm) {
    console.log(id);
    console.log(formData.value);
    this.orderStatus.updateOrderStatus({ _id: id, status: formData.value.status }).
      subscribe((result) => {
        console.log(result);
        alert("Order Status has been updated successfully!")
        this.orderList = result
        console.log(this.orderList);
      })

  }

}
