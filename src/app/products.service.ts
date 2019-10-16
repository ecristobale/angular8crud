import { Injectable } from '@angular/core';
import Product from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products: Product[] = [];

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.products.push(obj);
    console.log('Estos son los productos:');
    console.log(this.products);
  }

  getProducts() {
    return this.products;
  }

  deleteProduct(i) {
    if (i <= this.products.length) {
      this.products.splice(i, 1);
    }
  }

  editProduct(i) {
    if (i <= this.products.length) {
      return this.products[i];
    }
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this.products[id] = obj;
  }
}
