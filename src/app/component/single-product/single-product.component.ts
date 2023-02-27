import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/products';
import { ProductsService } from '../shop/services/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  title = 'AngularComponent';
  id: number;
  productLists: ProductModel[] = [];
  productDetails: ProductModel | undefined;


  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private service: ProductsService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.getProductDetails();
  }

  goToCart(productDetails: any | undefined) {
    console.log(productDetails, 'producDetails');
    this.service.cartProducts.push(productDetails);
    this.router.navigate(['/cart'])
  }

  getProductDetails() {
    this.service.getProductById(this.id).subscribe({
      next: (resp: ProductModel) => {
        this.productDetails = resp
      },
      error: (_err) => {
        console.log(_err);
      },
    });
  }
}
