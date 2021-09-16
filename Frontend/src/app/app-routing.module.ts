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
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { CartComponent } from './cart/cart.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EditEmployeeProfileComponent } from './edit-employee-profile/edit-employee-profile.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { TrackingNumberComponent} from './tracking-number/tracking-number.component';

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  {path: "adminSignIn" , component: AdminSignInComponent},
  { path: "userpanel",component:UserPanelComponent},
  { path: "userSignUp",component:UserSignUpComponent},
  { path: "userSignIn",component:UserSignInComponent},
  { path: "adminSignIn", component: SignInComponent },
  { path: "employeeSignIn", component: EmployeeSigninComponent },
  { path: "employeePanel", component: EmployeePanelComponent },
  { path: "addEmployee", component: AddEmployeeComponent },
  { path: "deleteEmployee", component: DeleteEmployeeComponent },
  { path: "generateReport", component: GenerateReportComponent },
  { path: "add", component: AddComponent },
  { path: "delete", component: DeleteComponent },
  { path: "update", component: UpdateComponent },
  { path: "view", component: ViewComponent },
  { path: "SendRequest", component: SendRequestComponent },
  { path: "displayProducts", component: DisplayProductComponent},
  { path: "cart/:user", component: CartComponent},
  { path: "checkout/:user", component: CheckoutComponent},
  { path: "displayProducts", component: DisplayProductComponent },
  { path: "profileEdit", component: EditEmployeeProfileComponent},
  { path: "editUserProfile", component: EditUserProfileComponent},
  { path: "userFunds", component: UserFundsComponent},
  { path: "orderStatus", component: OrderStatusComponent},
  { path: "orderConfirmation/:tracking", component: OrderConfirmationComponent},
  { path: "adminPanel", component: AdminPanelComponent},
  { path: "tracking", component: TrackingNumberComponent},
  { path: "raiseTicket", component: RaiseTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
