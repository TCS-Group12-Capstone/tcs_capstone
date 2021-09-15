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
    return this.http.post("http://localhost:9090/api/user/signUp", addEmployee,
      { responseType: 'text' });
  }
  sentRequests(request: Request): Observable<any> {
    return this.http.post("http://localhost:1020/api/requests/send-requests", request);
  }

  updateProfile(user: any): Observable<any> {
    return this.http.put("http://localhost:1020/api/employee/update", user);
  }

  getProfile(): Observable<any> {
    return this.http.post("http://localhost:1020/api/employee/profile", {});
  }
}
