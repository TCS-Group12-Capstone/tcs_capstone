import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  email:String="";
  constructor(public activateRouter:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe(data => {
      this.email = data.id;
      console.log(this.email);
    });
  }
  logout(){
    this.router.navigate([""]);
  }
  editProfile(){
    this.router.navigate(["/editUserProfile"],{queryParams:{email:this.email}});
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
