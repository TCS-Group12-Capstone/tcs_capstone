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
    this.activateRouter.params.subscribe(data => this.email = data.user);
  }
  logout(){
    this.router.navigate(["/userSignIn"]);
  }
  editProfile(){
    this.router.navigate(["/editUserProfile"]);
  }
  funds(){
    // this.router.navigate(["/userSignIn"]);
  }
  cart(){
    //this.router.navigate(["/userSignIn"]);
  }
}
