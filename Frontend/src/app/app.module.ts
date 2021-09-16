import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { SignInComponent } from './admin/signin/signin.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { CartComponent } from './cart/cart.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { EditEmployeeProfileComponent } from './edit-employee-profile/edit-employee-profile.component';
import { UserFundsComponent } from './user-funds/user-funds.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { sharedService } from './shared-service/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportComponent,
    AdminPanelComponent,
    UserPanelComponent,
    UserSignUpComponent,
    UserSignInComponent,
    EmployeePanelComponent,
    EditUserProfileComponent,
    SignInComponent,
    UserSigninComponent,
    EmployeeSigninComponent,
    LandingPageComponent,
    DisplayProductComponent,
    CartComponent,
    SendRequestComponent,
    CheckoutComponent,
    EditEmployeeProfileComponent,
    UserFundsComponent,
    OrderStatusComponent,
    OrderConfirmationComponent,
    AdminSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [sharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
