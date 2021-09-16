import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-tracking-number',
  templateUrl: './tracking-number.component.html',
  styleUrls: ['./tracking-number.component.css']
})
export class TrackingNumberComponent implements OnInit {
  msg="";
  trackingRef = new FormGroup({
    tracking: new FormControl()
  })

  constructor(public orderService:OrderService, public router:Router) { }

  ngOnInit(): void {
  }

  enterTracking() {
    let tracking = this.trackingRef.value.tracking;
    this.orderService.getTracking(tracking).
    subscribe(result => 
      {
        if(result.msg=="found") {
          this.router.navigate(['orderStatus'],{queryParams: {tracking:tracking}});
        } else {
          this.msg="Tracking Number Not Found";
        }
      }
     ,err=>console.log(err))

  }

}
