import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  email="";
  userProfileRef = new FormGroup({
    address:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })
  constructor(public activateRouter:ActivatedRoute,public router:Router) {
    this.activateRouter.queryParams.subscribe(data => {
      this.email = JSON.stringify(data);
    });
  }

  ngOnInit(): void {
  }

  updateUserInfo(){
    let data = this.userProfileRef.value;
    console.log(data);
  }
}

