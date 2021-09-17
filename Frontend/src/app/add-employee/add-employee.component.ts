import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


loginRef = new FormGroup({
    fname:new FormControl("",Validators.required),
    lname:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })

  constructor(public addEmployee:EmployeeService) { }

  msg="";
  ngOnInit(): void {
  }

  addEmp(){
    let data = this.loginRef.value;
    this.addEmployee.empAccountCreate(data).
    subscribe(result=>this.msg=result,err=>console.log(err))
    console.log(data);
    this.loginRef.reset();
  }

}
