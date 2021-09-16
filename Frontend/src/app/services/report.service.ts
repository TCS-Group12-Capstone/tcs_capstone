import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(public http: HttpClient) { }

  insertReport(product: Object): Observable<any> {
    return this.http.post<any>("http://localhost:1020/api/reports/insert", product);
  }
}
