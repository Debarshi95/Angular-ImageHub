import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeMainContentComponent } from "./components/home-main-content/home-main-content.component";
import { ImagesComponent } from "./components/images/images.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: HomeMainContentComponent,
    pathMatch: "full"
  },
  {
    path: "images",
    component: ImagesComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
