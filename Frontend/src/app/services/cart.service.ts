import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../classes/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public http: HttpClient) { }

  addCart(product: Cart): Observable<any> {
    return this.http.post<any>("http://localhost:1020/api/cart/addCart", product);
  }

  getCart(userId: string): Observable<Cart[]> {
    return this.http.get<Cart[]>("http://localhost:1020/api/cart/getCart/" + userId);
  }
}
