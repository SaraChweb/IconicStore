import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { ProductModel } from '../../../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: BehaviorSubject<ProductModel[]> = new BehaviorSubject<
    ProductModel[]
  >([]);
  $products: Observable<ProductModel[]> = this.products.asObservable();
  //   importDataProduct = JSON.stringify();
  //   productData: ProductModel[];
  cartProducts: any[] = [];
  constructor(private http: HttpClient) {
    // this.productData = JSON.parse(this.importDataProduct);
  }

  //shfaq te dhena
  displayAllProducts(): Observable<ProductModel[]> {
    let api = environment.api + 'users/getAllProducts';
    return this.http.get<ProductModel[]>(api);
  }

  getProductById(id:number): Observable<ProductModel> {
    let api = environment.api + 'users/getProductById/' + id;
    return this.http.get<ProductModel>(api);
  }
  //   getProducts(): Observable<ProductModel[]> {
  //     return of(this.productData);
  //   }
}