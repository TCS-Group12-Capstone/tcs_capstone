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

  getProfile(empEmail: String): Observable<any> {
    console.log(empEmail)
    return this.http.post("http://localhost:1020/api/employee/profile", { email: empEmail });
  }

  empSignIn(userInfo: Employee): Observable<any> {
    return this.http.post("http://localhost:1020/api/user/empSignIn", userInfo,
      { responseType: 'text' });
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

  updateUserProfile(user: any): Observable<any> {
    return this.http.put("http://localhost:1020/api/employee/updateUserProfile", user);
  }

  getItemReport(itemId: Employee): Observable<any> {
    return this.http.post("http://localhost:1020/api/reports/getProductReports", itemId);
  }

  getAllProducts(): Observable<any> {
    return this.http.get("http://localhost:1020/api/product/getAllProducts");
  }

  getAllRaiseTicket(): Observable<any> {
    return this.http.get("http://localhost:1020/api/lock/getAllRaiseTicket");
  }

  unlockUser(user: Object): Observable<any> {
    console.log('Employee Service User Object', user);
    return this.http.put("http://localhost:1020/api/lock/unlockUser", user);
  }

  deleteRaiseTicket(userId: Object): Observable<any> {
    console.log('Employee Service User Object', userId);
    return this.http.put("http://localhost:1020/api/lock/deleteRaiseTicket", userId);
  }

  getCustomerReport(custId: any): Observable<any> {
    return this.http.post("http://localhost:1020/api/reports/getCustomerReports", custId);
  }

}
