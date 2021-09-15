import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee-profile',
  templateUrl: './edit-employee-profile.component.html',
  styleUrls: ['./edit-employee-profile.component.css']
})
export class EditEmployeeProfileComponent implements OnInit {

  // User obj to get the user info to display from
  user: any;
  // Boolean to make sure that html doesn't try to render until data is recieved from db
  loadingData = false;

  constructor(private empService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    this.empService.getProfile().subscribe((result) => {
      this.user = result.profile;
      console.log(this.user);
      this.loadingData = true;
    });
  }

  saveProfile() {
    console.log("Updating user");
    // user service to update the user info.
    this.empService.updateProfile(this.user).subscribe((response) => {
      console.log(response.message);
      alert(response.message)
    });
  }

}
