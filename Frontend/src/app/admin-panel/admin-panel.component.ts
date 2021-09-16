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
  addProduct(){
    this.router.navigate(["/add"]);
  }
  deleteProduct(){
    this.router.navigate(["/delete"]);
  }
  updateProduct(){
    this.router.navigate(["/update"]);
  }
  viewProduct(){
    this.router.navigate(["/view"]);
  }
  logout(){
    
  }

}
