import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { SignInComponent } from './admin/signin/signin.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { EmployeeSigninComponent } from './employee-signin/employee-signin.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DisplayProductComponent } from './display-product/display-product.component';
import { SendRequestComponent } from './send-request/send-request.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportComponent,
    EmployeePanelComponent,
    EditUserProfileComponent,
    SignInComponent,
    UserSigninComponent,
    EmployeeSigninComponent,
    LandingPageComponent,
    DisplayProductComponent,
    SendRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
