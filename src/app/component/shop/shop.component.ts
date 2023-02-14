import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductModel } from 'src/app/models/products';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

  export class ShopComponent{
    title = 'AngularComponent';
    ratingcount = 0;
    totalrating = 0;
    avarageRating : any ;
    ratingcontrol = new FormControl(0);
    productList!: ProductModel[];
    productLists: ProductModel[]=[];

    constructor(public router: Router,private service : ProductsService){}
    ngOnInit(){
      this.getProducts()
    }
    goToSingleProduct() {
    this.router.navigate(['/singleProduct'])

    }
    getRating(){
      this.ratingcount++;
      this.totalrating+=this.ratingcontrol?.value || 0;
      console.log(this.ratingcontrol.value);
      this.avarageRating = (this.totalrating / this.ratingcount).toFixed(2);  
    }

    getProducts(){
      this.service.displayAllProducts().subscribe({
        next : (resp: ProductModel[]) =>{
          console.log(resp ,'PRoductssss');
          this.productLists = resp
        },
        error: (_err)=>{
          console.log(_err)
        }
      })
    
    }
}
