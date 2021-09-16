import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../user.service';

@Component({
  selector: 'app-user-funds',
  templateUrl: './user-funds.component.html',
  styleUrls: ['./user-funds.component.css']
})
export class UserFundsComponent implements OnInit {
  msg="";
  email="";
  currId="";
  fundRef = new FormGroup({
    account: new FormControl,
    fundAmt: new FormControl
  })

  constructor(private userService: UsersService, public activateRouter:ActivatedRoute,public router:Router) {
    this.activateRouter.queryParams.subscribe(data => {
      this.email = data.email;
    });
  }

  ngOnInit(): void {
    this.userService.getUserId(this.email).subscribe(
      result => {
       this.currId=result._id;
       console.log(this.currId);
      },
      error => console.log(error)
    )
  }

  addFunds() {
    let data = this.fundRef.value;
    if(!data.account || !data.fundAmt) {
      this.msg="Please enter account # and fund amount";
    } else {
      this.userService.decreaseFund({userId:this.currId, amount:-1*data.fundAmt}).subscribe(
        result => {
         console.log(result);
         this.msg="$"+data.fundAmt+" added successfully";
        },
        error => console.log(error)
      )

    }
  }

}
