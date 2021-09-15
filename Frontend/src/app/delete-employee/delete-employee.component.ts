import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

 deleteRef = new FormGroup({
  email:new FormControl()
  })
  constructor(public deleteEmployee:EmployeeService) { }
  msg="";
  ngOnInit(): void {
  }

  deleteEmp(){
    let delEmail = this.deleteRef.value;
    console.log(delEmail)
    this.deleteEmployee.empAccountDelete(delEmail.email).
    subscribe(result=>this.msg=result,err=>console.log(err))

    this.deleteRef.reset();
  }

}
