import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeMainContentComponent } from "./components/home-main-content/home-main-content.component";
import { ImagesComponent } from "./components/images/images.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UploadImageComponent } from "./components/upload-image/upload-image.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { ChangePasswordComponent } from "./components/change-password/change-password.component";

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
  },
  {
    path: "upload",
    component: UploadImageComponent
  },
  {
    path: "resetpassword",
    component: ResetPasswordComponent
  },{
    path:'changepassword',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
