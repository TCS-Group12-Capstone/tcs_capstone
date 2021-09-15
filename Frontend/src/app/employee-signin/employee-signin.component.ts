import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-signin',
  templateUrl: './employee-signin.component.html',
  styleUrls: ['./employee-signin.component.css']
})
export class EmployeeSigninComponent implements OnInit {
  msg = "";
  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(public empService:EmployeeService,public router:Router) { }

  ngOnInit(): void {
  }

  checkLogin(){
    let employeeInfo = this.loginRef.value;
    this.empService.empSignIn(employeeInfo).
    subscribe(result => 
      {
        if(result == "Success"){
          this.router.navigate(['employeePanel', employeeInfo.email]);
        }else{
          console.log(result);
          this.msg=result;
        }
      }
     ,err=>console.log(err))
  }
}