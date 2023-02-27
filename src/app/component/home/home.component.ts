import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/products';
import { ProductsService } from '../shop/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'AngularComponent';
  productList!: ProductModel[];
  productLists: ProductModel[] = [];
  
  constructor(public router: Router, private service: ProductsService) { }
  ngOnInit() {
    this.getProducts()
  }
  goToSingleProduct() {
    this.router.navigate(['/singleProduct'])
  }

  goToShop() {
    this.router.navigate(['/shop'])

    }
  
  getProducts() {
    this.service.displayAllProducts().subscribe({
      next: (resp: ProductModel[]) => {
        console.log(resp, 'PRoductssss');
        this.productLists = resp
      },
      error: (_err) => {
        console.log(_err)
      }
    })
  }
}
