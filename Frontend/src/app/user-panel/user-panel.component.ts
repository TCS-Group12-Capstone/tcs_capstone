import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../classes/product';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  userName?:String;
  constructor(public activateRouter:ActivatedRoute,public router:Router,public allProducts:EmployeeService) { }
 products:Array<Product>=[];


  ngOnInit(): void {
    this.activateRouter.params.subscribe(data => this.userName=data.email);

    this.allProducts.getAllProducts().
    subscribe(result=>
      this.products=result
      ,error=>console.log(error))

  }
  


  logout(){
    this.router.navigate(["/userSignIn"]);
  }
  editProfile(){
    this.router.navigate(["/editUserProfile"]);
  }
  funds(){
    this.router.navigate(["/userFunds"]);
  }
  cart(){
    //this.router.navigate(["/userSignIn"]);
  }
  orderStatus(){
    this.router.navigate(["/orderStatus"]);
  }
}
