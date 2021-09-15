import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }

  empAccountCreate(addEmployee: Employee): Observable<any> {
    return this.http.post("http://localhost:1020/api/employee/addEmployee", addEmployee,
      { responseType: 'text' });
  }

  sentRequests(request: Request): Observable<any> {
    return this.http.post("http://localhost:1020/api/requests/send-requests", request);
  }

  empAccountDelete(empEmail: String): Observable<any> {
    console.log(empEmail)
    //empEmail = JSON.stringify(empEmail)
    return this.http.delete("http://localhost:1020/api/employee/deleteEmployee/" + empEmail
      , { responseType: 'text' });
  }

  userSignUp(userInfo: Employee): Observable<any> {
    return this.http.post("http://localhost:1020/api/user/signUp", userInfo,
      { responseType: 'text' });
  }

  userSignIn(userInfo: Employee): Observable<any> {
    return this.http.post("http://localhost:1020/api/user/signIn", userInfo,
      { responseType: 'text' });
  }

  updateProfile(user: any): Observable<any> {
    return this.http.put("http://localhost:1020/api/employee/update", user);
  }

  getProfile(): Observable<any> {
    return this.http.post("http://localhost:1020/api/employee/profile", {});
  }

  empSignIn(userInfo:Employee):Observable<any>{
    return this.http.post("http://localhost:1020/api/user/empSignIn",userInfo,
    {responseType:'text'});
  }

  getDailyReport(): Observable<any> {
    return this.http.get("http://localhost:1020/api/reports/getDailyReports");
  }

  getMonthlyReport(): Observable<any> {
    return this.http.get("http://localhost:1020/api/reports/getMonthlyReports");
  }

  getWeeklyReport(): Observable<any> {
    return this.http.get("http://localhost:1020/api/reports/getWeeklyReports");
  }

  getItemReport(itemId: Number): Observable<any> {
    return this.http.post("http://localhost:1020/api/reports/getProductReports", itemId);
  }
}
