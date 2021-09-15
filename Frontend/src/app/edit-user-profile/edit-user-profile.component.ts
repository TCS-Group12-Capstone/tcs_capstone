import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css']
})
export class EditUserProfileComponent implements OnInit {
  userProfileRef = new FormGroup({
    address:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
  })
  constructor() {

  }

  ngOnInit(): void {
  }

  updateUserInfo(){
    let data = this.userProfileRef.value;
    console.log(data);
  }
}
