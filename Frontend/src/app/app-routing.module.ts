import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { GenerateReportComponent } from './generate-report/generate-report.component';

const routes: Routes = [
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
