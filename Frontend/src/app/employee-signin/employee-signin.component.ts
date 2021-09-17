import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { sharedService } from '../shared-service/shared.service';

@Component({
  selector: 'app-employee-signin',
  templateUrl: './employee-signin.component.html',
  styleUrls: ['./employee-signin.component.css']
})
export class EmployeeSigninComponent implements OnInit {
  msg = "";
  loginRef = new FormGroup({
    email: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })
  constructor(public empService: EmployeeService, public router: Router, private service: sharedService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    let employeeInfo = this.loginRef.value;
    this.empService.empSignIn(employeeInfo).
      subscribe(result => {
        if (result == "Success") {
          this.service.send(employeeInfo.email);
          this.router.navigate(['employeePanel'], { queryParams: { email: employeeInfo.email } });
        } else {
          this.msg = result;
        }
      }
        , err => console.log(err))
  }
}