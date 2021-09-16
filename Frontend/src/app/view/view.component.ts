import { Component, OnInit } from '@angular/core';
import { ProductItem, ProductsService } from 'src/app/product.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  products: ProductItem[] = []
	productsColumn = ["productId", "name", "price", "quantity"]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAll()
    .subscribe(data => this.products = data);
  }

  asCurrency(value: Number) {
		return value.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	}
}
