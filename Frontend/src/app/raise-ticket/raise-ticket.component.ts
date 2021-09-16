import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {

  msg: string = "Please fill in all fields to enable submit button";

  ticketForm = new FormGroup({ 
    email: new FormControl("", [Validators.required, Validators.email]),
    reason: new FormControl("", Validators.required)
  })
  
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  submitTicket() {
    let ticket = this.ticketForm.value;

    this.accountService.checkEmail(ticket).subscribe(
      result => this.msg = result,
      error => console.log(error)
    )

    this.ticketForm.reset();
  }

}
