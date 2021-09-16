import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {
  signInRef = new FormGroup({
    email: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })

  msg:String=""
  constructor(public adminService:EmployeeService,public router:Router) { }

  ngOnInit(): void {
  }

  checkAdmin(){
    let userInfo=this.signInRef.value;
    this.adminService.adminSignIn(userInfo).
    subscribe(result => 
      {
        if(result == "Success"){
          this.router.navigate(['adminPanel'],{queryParams: {id:userInfo.email }});
          
        }else{
          this.msg=result;
        }
      }
     ,err=>console.log(err))
  }

}
