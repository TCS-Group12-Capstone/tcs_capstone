import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public http: HttpClient) { }

  checkEmail(ticket: Object): Observable<any> {
    return this.http.post<any>("http://localhost:1020/api/user/verifyEmailAddress", ticket);
  }
}
