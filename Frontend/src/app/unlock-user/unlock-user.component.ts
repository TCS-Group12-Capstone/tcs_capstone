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
    userId: '',
    email: '',
    reason: '',
  }];

  constructor(private lockedUser: EmployeeService, private shared: sharedService) { }

  ngOnInit(): void {
    this.lockedUser.getAllRaiseTicket().
      subscribe((result) => {
        console.log(result)
        this.userList = result
        console.log(this.userList);
      })
  }

  unlockUsers(email: any, userId: string) {
    console.log(email);
    this.lockedUser.unlockUser({ email, lock: false }).subscribe((result) => {
      console.log(result);
      this.lockedUser.deleteRaiseTicket({ userId }).subscribe((response) => {
        console.log(response);
        this.lockedUser.getAllRaiseTicket().
          subscribe((data) => {
            console.log(data)
            this.userList = data;
            console.log(this.userList);
          })
      });
    })
  }


}
