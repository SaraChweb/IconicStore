import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/products';
import { ProductsService } from '../shop/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  title = 'AngularComponent';
  id: number;
  productLists: ProductModel[] = [];
  productDetails: ProductModel | undefined;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public service: ProductsService
  ) { 
        this.id = this.route.snapshot.params['id'];
  }
  

  ngOnInit() {
console.log(this.service.cartProducts,"cartproducts")
    }
  goToPayment() {
    this.router.navigate(['/payment']);
  }


}
