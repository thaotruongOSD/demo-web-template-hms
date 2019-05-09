import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';

const routes: Routes = [
  {
    path: 'Products',
    component: ProductsComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'Menu1',
    component: Menu1Component
  },
  {
    path: 'Menu2',
    component: Menu2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
