import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './admin/signin/signin.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { CartComponent } from './cart/cart.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { EditEmployeeProfileComponent } from './edit-employee-profile/edit-employee-profile.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "userpanel/:email",component:UserPanelComponent},
  { path: "userSignUp",component:UserSignUpComponent},
  { path: "userSignIn",component:UserSignInComponent},
  { path: "adminSignIn", component: SignInComponent },
  { path: "employeeSignIn", component: EmployeeSigninComponent },
  { path: "employeePanel/:email", component: EmployeePanelComponent },
  { path: "addEmployee", component: AddEmployeeComponent },
  { path: "deleteEmployee", component: DeleteEmployeeComponent },
  { path: "generateReport", component: GenerateReportComponent },
  { path: "SendRequest", component: SendRequestComponent },
  { path: "displayProducts", component: DisplayProductComponent },
  { path: "cart", component: CartComponent },
  { path: "profileEdit", component: EditEmployeeProfileComponent }
  { path: "adminPanel", component: AdminPanelComponent}
  //{path:"", redirectTo:"addEmployee",pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
