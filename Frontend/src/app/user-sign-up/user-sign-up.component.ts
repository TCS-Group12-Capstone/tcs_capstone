import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  signUpRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    DOB: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
 })
  constructor(public creatAccount:EmployeeService) { }
 msg="";
  ngOnInit(): void {
  }
  accountCreate(){
    let userInfo = this.signUpRef.value;
    this.creatAccount.userSignUp(userInfo).
    subscribe(result=>this.msg=result,err=>console.log(err))

    this.signUpRef.reset();
  }


}
