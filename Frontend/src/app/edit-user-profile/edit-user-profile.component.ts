import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  email="";
  error="";
  userProfileRef = new FormGroup({
    address:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(private userService: EmployeeService, public activateRouter:ActivatedRoute,public router:Router) {
    this.activateRouter.queryParams.subscribe(data => {
      this.email = data.email;
    });
  }

  ngOnInit(): void {
  }

  goBack() {
    this.router.navigate(['userpanel'],{queryParams: {id:this.email }});
  }

  updateUserInfo(){
    let data = this.userProfileRef.value;
    data.currEmail=this.email;
    if(!data.address || !data.phone || !data.email || !data.password) { // if any are null
      this.error = "Please fill in all fields";
    } else {
      this.userService.updateUserProfile(data)
      .subscribe((response) => {
        console.log(response);
      });
      this.router.navigate([""]);
    }

  }
}

