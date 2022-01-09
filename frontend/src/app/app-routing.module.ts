import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminGuard } from "src/shared/guards/admin.guard";
import { AuthGuard } from "src/shared/guards/auth.guard";
import { AuthComponent } from "./auth/auth.component";
import { CartComponent } from "./cart/cart.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { StoreManagementComponent } from "./store-management/store-management.component";
import { StoreComponent } from "./store/store.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'store', component: StoreComponent },
    { path: 'cart', canActivate: [AuthGuard], component: CartComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'management', canActivate: [AuthGuard, AdminGuard] ,component: StoreManagementComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}