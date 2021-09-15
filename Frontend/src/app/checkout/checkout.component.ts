import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from '../classes/user-info';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  username: string = "failed to get username";
  userInfo: UserInfo = new UserInfo(this.username, 0.00); // default user info, to get rid of compiler error

  constructor(
    public activatedRoute: ActivatedRoute,
    public userService: UsersService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      data => this.username = data.user
    )

    this.userService.getUserFund(this.username).subscribe(
      result => this.userInfo = result,
      error => console.log(error)
    )
  }

}
