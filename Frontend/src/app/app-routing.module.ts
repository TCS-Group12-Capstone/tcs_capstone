import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

const routes: Routes = [
  {path:"addEmployee", component:AddEmployeeComponent},
  {path:"deleteEmployee", component:DeleteEmployeeComponent},
  {path:"generateReport", component:GenerateReportComponent},
  {path:"userpanel/:email",component:UserPanelComponent},
  {path:"signUp",component:UserSignUpComponent},
  {path:"signIn",component:UserSignInComponent},
  {path:"", component:AdminPanelComponent,pathMatch:"prefix"}
  //{path:"userpanel",component:UserPanelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
