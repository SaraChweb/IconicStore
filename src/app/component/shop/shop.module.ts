import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { ProductsService } from './services/products.service';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HeaderModule,
    FooterModule,
    NgbRatingModule
  ] ,
  providers : [
    ProductsService
  ]
})
export class ShopModule { }
