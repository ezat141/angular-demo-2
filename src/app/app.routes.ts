import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ValuesComponent } from './components/values/values.component';
import { VisionComponent } from './components/vision/vision.component';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home',component: HomeComponent},
  { path: 'Login',component: LoginComponent},
  { path: 'Products',
    loadComponent:()=>import('./components/products/products.component')
    .then(obj=>obj.ProductsComponent), canActivate: [authGuard]},
  {path:'AddProduct',component: AddProductComponent},
  {path:'Register',component: RegisterComponent},
  { path: 'Details/:id',component: DetailsComponent},
  {
    path: 'About',
    component:AboutUsComponent,
    children:[
      {path:'',redirectTo:'Vision',pathMatch:'full'},
      {path:'Vision',component:VisionComponent},
      {path:'Values',component:ValuesComponent},
    ],
  },
  { path: '**',component: NotFoundComponent},
];
