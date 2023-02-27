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
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
{path:'',component:HomeComponent,canActivate:[AuthGuard]},
{
    path: '',redirectTo: 'login',pathMatch:'full'
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
  },

{
    path: 'blog',
    component: BlogComponent,canActivate:[AuthGuard]
  },

  {
    path: 'about',
    component: AboutComponent,canActivate:[AuthGuard]
  },

  {
    path: 'cart',
    component: CartComponent,canActivate:[AuthGuard]
  },

  {
    path: 'singleProduct',
    component: SingleProductComponent,canActivate:[AuthGuard]
  },

{
    path: 'payment',
    component: PaymentComponent,canActivate:[AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
