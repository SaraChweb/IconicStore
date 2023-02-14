import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { ProductModel } from '../../../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private myApi: string;
  private products: BehaviorSubject<ProductModel[]> = new BehaviorSubject<
    ProductModel[]
  >([]);
  $products: Observable<ProductModel[]> = this.products.asObservable();
  //   importDataProduct = JSON.stringify();
  //   productData: ProductModel[];
  constructor(private http: HttpClient) {
    // this.productData = JSON.parse(this.importDataProduct);
    this.myApi = environment.api + '/products/';
  }

  
//shfaq te dhena 
  displayAllProducts():Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.myApi);
  }

  
  //   getProducts(): Observable<ProductModel[]> {
  //     return of(this.productData);
  //   }
}