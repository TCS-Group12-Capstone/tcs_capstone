import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  tracking="";
  status=0;
  statusWord="";
  constructor(public orderService:OrderService, public activateRouter:ActivatedRoute, public router:Router) { 
    this.activateRouter.queryParams.subscribe(data => {
      this.tracking = data.tracking;
    });
  }

  ngOnInit(): void {
    this.orderService.getStatus(this.tracking).
    subscribe(result => 
      {
        if(result.status.toLowerCase().trim() == "shipped") {
          this.status=50;
          this.statusWord="Order Shipped";
        } else if(result.status.toLowerCase().trim() == "placed") {
          this.status = 0;
          this.statusWord="Order Placed";  
        } else if(result.status.toLowerCase().trim() == "delivered") {
          this.status = 100;
          this.statusWord="Order Delivered";  
        } else if(result.status.toLowerCase().trim() == "cancelled") {
          this.status = 0;
          this.statusWord="Order Cancelled";  
        } else if(result.status.toLowerCase().trim() == "out for delivery") {
          this.status = 90;
          this.statusWord="Out for Delivery";  
        }
      }
     ,err=>console.log(err))
  }

}
