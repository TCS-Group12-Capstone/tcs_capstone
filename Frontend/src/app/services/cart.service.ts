import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../classes/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public total: number = 0.00;
  public cart: Cart[] = [];

  constructor(public http: HttpClient) { }

  addCart(product: Cart): Observable<any> {
    return this.http.post<any>("http://localhost:1020/api/cart/addCart", product);
  }

  getCart(userId: string): Observable<Cart[]> {
    return this.http.get<Cart[]>("http://localhost:1020/api/cart/getCart/" + userId);
  }

  deleteCart(product: Cart): Observable<any> {
    return this.http.request<any>(
      'DELETE', 
      "http://localhost:1020/api/cart/deleteCart", {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: product
    });
  }

  decrementCart(product: Cart): Observable<any> {
    return this.http.patch<any>("http://localhost:1020/api/cart/decrementCart", product);
  }
}
