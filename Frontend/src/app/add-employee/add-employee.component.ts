import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

  addEmp(){
    let data = this.loginRef.value;
    console.log(data);

    this.loginRef.reset();
  }

}
