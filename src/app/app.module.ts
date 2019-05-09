import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebLayoutModule } from '../../node_modules/web-template-hms';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ContactComponent,
    Menu1Component,
    Menu2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
