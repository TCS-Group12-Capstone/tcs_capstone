import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  email: string = "no email available";
  tracking: string = "no tracking available";

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.tracking = data.tracking;
      this.email = data.email;
    });
  }

  goToUserPanel() {
    this.router.navigate(["userpanel"],
      { queryParams: { id: this.email } }
    );
  }
}
