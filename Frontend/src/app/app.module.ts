import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { GenerateReportComponent } from './generate-report/generate-report.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    GenerateReportComponent,
    EmployeePanelComponent,
    EditUserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
