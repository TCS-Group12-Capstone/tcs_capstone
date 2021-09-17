import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { tap, catchError } from "rxjs/operators";

export interface ProductItem {
	_id: String,
	name: String,
	price: Number,
	quantity: Number,
	image:String,
	__v: Number,
}
@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	host = "http://localhost:1020";
	endpoint = "/api/product";

	constructor(private http: HttpClient) { }

	getAll() {
		const url = this.host + this.endpoint + "/getAllProducts";
		return this.http.get<ProductItem[]>(url)
			.pipe(
				tap(data => console.log(data)),
				catchError(error => throwError(error))
			)
	}

	addProduct(product: { name: String, price: Number, quantity: Number }) {
		const url = this.host + this.endpoint + "/getProducts";
		this.http.post(url, product)
			.subscribe(result => console.log(result), error => console.error(error));
	}

	updateProduct(update: { productId: String, name: String, price: Number, quantity: Number }) {
		const url = this.host + this.endpoint + "/updateById";
		this.http.put(url, update)
			.subscribe(result => console.log(result), error => console.error(error));
	}

	deleteProduct(product: { productId: String }) {
		const url = this.host + this.endpoint + "/deleteById";
		this.http.delete(url, { params: { "productId": product.productId.toString() } })
			.subscribe(result => console.log(result), error => console.error(error));
	}
}