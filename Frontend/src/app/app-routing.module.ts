import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './admin/signin/signin.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { CartComponent } from './cart/cart.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { EditEmployeeProfileComponent } from './edit-employee-profile/edit-employee-profile.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "adminSignIn", component: SignInComponent },
  { path: "userSignIn", component: UserSigninComponent },
  { path: "employeeSignIn", component: EmployeeSigninComponent },
  { path: "employeePanel", component: EmployeePanelComponent },
  { path: "addEmployee", component: AddEmployeeComponent },
  { path: "deleteEmployee", component: DeleteEmployeeComponent },
  { path: "generateReport", component: GenerateReportComponent },
  { path: "SendRequest", component: SendRequestComponent },
  { path: "displayProducts", component: DisplayProductComponent },
  { path: "cart", component: CartComponent },
  { path: "profileEdit", component: EditEmployeeProfileComponent }
  //{path:"", redirectTo:"addEmployee",pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
