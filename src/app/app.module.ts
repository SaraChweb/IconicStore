import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { AboutComponent } from './component/about/about.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderModule } from './component/header/header.module';
import { FooterModule } from './component/footer/footer.module';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { ShopComponent } from './component/shop/shop.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './component/shop/services/products.service';
import { BlogLVComponent } from './component/blog-lv/blog-lv.component';
import { BlogPradaComponent } from './component/blog-prada/blog-prada.component';
import { BlogGuessComponent } from './component/blog-guess/blog-guess.component';
import { BlogValentinoComponent } from './component/blog-valentino/blog-valentino.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    CartComponent,
    SingleProductComponent,
    RegisterUserComponent,
    PaymentComponent,
    ShopComponent,
    BlogLVComponent,
    BlogPradaComponent,
    BlogGuessComponent,
    BlogValentinoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [ ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
