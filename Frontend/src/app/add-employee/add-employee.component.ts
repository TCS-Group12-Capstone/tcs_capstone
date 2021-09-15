import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


loginRef = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
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
