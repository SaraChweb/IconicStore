import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

  export class ShopComponent{
    title = 'AngularComponent';
    
    productList!: ProductModel[];
    productLists: ProductModel[]=[];

    constructor(public router: Router,private service : ProductsService){}
    ngOnInit(){
      this.getProducts()
  }
  
    goToSingleProduct(id:number) {
    this.router.navigate(['/singleProduct', id])
  }
  
  goToCart() {
    this.router.navigate(['/cart'])   
  }

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
