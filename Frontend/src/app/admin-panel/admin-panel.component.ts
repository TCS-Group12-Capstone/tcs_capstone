import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  addEmployee(){
    this.router.navigate(["/addEmployee"]);
  }
  
  deleteEmployee(){
    this.router.navigate(["/deleteEmployee"]);
  }

  generateReport(){
    this.router.navigate(["/generateReport"]);
  }

  logout(){
    this.router.navigate(["/adminSignIn"]);
  }

}
