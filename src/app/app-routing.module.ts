import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { BlogComponent } from './component/blog/blog.component';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { SingleProductComponent } from './component/single-product/single-product.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { BlogLVComponent } from './component/blog-lv/blog-lv.component';
import { BlogPradaComponent } from './component/blog-prada/blog-prada.component';
import { BlogGuessComponent } from './component/blog-guess/blog-guess.component';
import { BlogValentinoComponent } from './component/blog-valentino/blog-valentino.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register-user',
    component: RegisterUserComponent
  },
  {path:'',component:HomeComponent,canActivate:[AuthGuard]},
  {
    path: 'shop',
    component:ShopComponent,canActivate:[AuthGuard]
    component: ShopComponent,
  },

  {
    path: 'blog',
    component: BlogComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: 'singleProduct/:id',
    component: SingleProductComponent,
  },

  {
    path: 'payment',
    component: PaymentComponent,
  },

  {
    path: 'blogLV',
    component: BlogLVComponent,
  },

  {
    path: 'blogPrada',
    component: BlogPradaComponent,
  },

  {
    path: 'blogGuess',
    component: BlogGuessComponent,
  },

  {
    path: 'blogValentino',
    component: BlogValentinoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
