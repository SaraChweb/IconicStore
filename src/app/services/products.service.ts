import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { ProductModel } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private myApi: string;
  private products: BehaviorSubject<ProductModel[]> = new BehaviorSubject<
    ProductModel[]
  >([]);
  $products: Observable<ProductModel[]> = this.products.asObservable();

  constructor(private http: HttpClient) {
    this.myApi = environment.api + '/products/';
  }

  //Display products from j.Son file
  displayAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.myApi);
  }
}
