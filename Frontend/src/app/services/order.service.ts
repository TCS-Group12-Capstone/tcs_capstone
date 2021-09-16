import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }

  create(order: Object): Observable<any> {
    return this.http.post<any>("http://localhost:1020/api/order/create", order);
  }

  getTracking(tracking: String): Observable<any> {
    return this.http.post("http://localhost:1020/api/order/getTracking", { tracking: tracking });
  }
}

