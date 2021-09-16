import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { sharedService } from '../shared-service/shared.service';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.css']
})
export class UnlockUserComponent implements OnInit {
  userList = [{
    _id: '',
    email: '',
    reason: '',
  }];
  user: any

  constructor(private lockedUser: EmployeeService, private shared: sharedService) { }

  ngOnInit(): void {
    this.lockedUser.getLockedUser().
      subscribe((result) => {
        console.log(result)
        this.userList = result
        console.log(this.userList);
      })
  }

  unlockUsers() {
    this.lockedUser.unlockUser(this.user).subscribe((result) => {
      console.log(result.messa);
    })
    console.log(this.user)

  }


}
