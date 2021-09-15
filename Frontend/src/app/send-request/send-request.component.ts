import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {
  request = new FormGroup({
    ename: new FormControl(),
    productName: new FormControl(),
    restock: new FormControl(),
  })

  constructor(public data: EmployeeService) { }
  msg?: string;

  ngOnInit(): void {
  }

  onSubmit() {
    //let data = this.request.value;
    let data = JSON.stringify(this.request.value)
    console.log(data);
    this.data.sentRequests(this.request.value).
      subscribe((result) => {
        this.msg = result;
        alert(result.message);
        window.location.reload();
      }, error => console.log(error));

  }
}
