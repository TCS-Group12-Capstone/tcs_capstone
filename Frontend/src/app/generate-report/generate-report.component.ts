import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Reports } from '../reports';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  constructor(public router:Router,public generateReport:EmployeeService) { }
  daily:boolean=false;
  monthly:boolean=false;
  weekly:boolean=false;
  customer:boolean=false;
  item:boolean=false;
  array:Array<Reports>=[];
  
  getIdRef = new FormGroup({
      id: new FormControl()
    }
  );


  ngOnInit(): void {
  }

  dailyReport(){
    this.monthly=false;
    this.weekly=false;
    this.customer=false;
    this.item=false;

    this.generateReport.getDailyReport().
    subscribe(result=> this.array=result,error=>console.log(error))
    console.log(this.array);

    this.daily=true;

  }

  weeklyReport(){
    this.daily=false;
    this.monthly=false;
    this.customer=false;
    this.item=false;

    this.generateReport.getWeeklyReport().
    subscribe(result=> this.array=result,error=>console.log(error))
    console.log(this.array);
    
    this.weekly=true;
  }

  monthlyReport(){
    this.weekly=false;
    this.customer=false;
    this.item=false;

    this.generateReport.getMonthlyReport().
    subscribe(result=> this.array=result,error=>console.log(error))
    console.log(this.array);
    
    this.daily=false;
    this.monthly=true;
  }

  customerReport(){
    this.daily=false;
    this.monthly=false;
    this.weekly=false;
    this.customer=true;
    this.item=false;

    this.getIdRef.reset()
  }

  productReport(){
    this.daily=false;
    this.monthly=false;
    this.customer=false;
    this.item=true;

    let itmId = this.getIdRef.value;
    this.generateReport.getItemReport(itmId).
    subscribe(result=> this.array=result,error=>console.log(error))
    console.log(this.array);

    this.getIdRef.reset()
  }

}
