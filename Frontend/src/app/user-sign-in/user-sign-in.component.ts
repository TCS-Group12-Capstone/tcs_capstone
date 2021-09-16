import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  signInRef = new FormGroup({
    email: new FormControl("",Validators.required),
    password:new FormControl("", Validators.required)
  })
  constructor(public userService:EmployeeService,public router:Router) { }
  msg="";
  userLock:boolean=false;
  lockCounter:Number=3;

  ngOnInit(): void {
  }
  checkUser(){
    let userInfo=this.signInRef.value;
    this.userService.userSignIn(userInfo).
    subscribe(result => 
      {
        if(result == "Success"){
          this.router.navigate(['userpanel'],{queryParams: {id:userInfo.email }});
          
        }else{
          this.msg=result;

        }
      }
     ,err=>console.log(err))

  }
}
// {
//   if(result == "Success"){
//     this.router.navigate(["home",userInfo.email]);
//   }else {
//       this.msg = result;
//   }
// }