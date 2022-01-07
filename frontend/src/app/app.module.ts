import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsListComponent } from './store/products-list/products-list.component';
import { ProductComponent } from './store/products-list/product/product.component';
import { OptionsPanelComponent } from './store/options-panel/options-panel.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { StoreManagementComponent } from './store-management/store-management.component';
import { ProductManagementComponent } from './store-management/product-management/product-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoreComponent,
    CartComponent,
    ContactComponent,
    ProductsListComponent,
    ProductComponent,
    OptionsPanelComponent,
    AuthComponent,
    StoreManagementComponent,
    ProductManagementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
