import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import Product from '../product';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: Product[];
  constructor(private ps: ProductsService) { }

  ngOnInit() {
    this.products = this.ps.getProducts();
  }

  deleteProduct(i: number){
    this.ps.deleteProduct(i);
    this.products = this.ps.getProducts();
  }

}
