import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-signin',
  templateUrl: './employee-signin.component.html',
  styleUrls: ['./employee-signin.component.css']
})
export class EmployeeSigninComponent implements OnInit {

  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
  }

  checkLogin(){
    let data = this.loginRef.value;
    console.log(data);
  }
}
