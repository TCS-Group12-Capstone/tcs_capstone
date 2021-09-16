import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:1020/api/product/getAllProducts");
  }

  getProducts(products: string[]): Observable<Product[]> {
    return this.http.post<Product[]>("http://localhost:1020/api/product/getProducts", products);
  }

  decreaseAmount(product: Object): Observable<any> {
    return this.http.patch<any>("http://localhost:1020/api/product/decreaseAmount", product);
  }
}
