import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-funds',
  templateUrl: './user-funds.component.html',
  styleUrls: ['./user-funds.component.css']
})
export class UserFundsComponent implements OnInit {

  fundRef = new FormGroup({
    account: new FormControl,
    fundAmt: new FormControl
  })

  constructor() { }

  ngOnInit(): void {
  }

  addFunds() {
    console.log('hi');
  }

}
