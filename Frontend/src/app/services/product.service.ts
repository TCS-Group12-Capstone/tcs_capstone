import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  getProducts(products: string[]): Observable<Product[]> {
    return this.http.post<Product[]>("http://localhost:1020/api/product/getProducts", products);
  }
}
