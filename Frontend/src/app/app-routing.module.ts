import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';

const routes: Routes = [
  {path:"", component:LandingPageComponent},
  {path:"adminSignIn", component:AdminSigninComponent},
  {path:"userSignIn", component:UserSigninComponent},
  {path:"employeeSignIn", component:EmployeeSigninComponent},
  {path:"employeePanel", component:EmployeePanelComponent},
  {path:"addEmployee", component:AddEmployeeComponent},
  {path:"deleteEmployee", component:DeleteEmployeeComponent},
  {path:"generateReport", component:GenerateReportComponent}
  //{path:"", redirectTo:"addEmployee",pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
