import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ShowcaseComponent } from "./showcase/showcase.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'showcase', component: ShowcaseComponent },
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}