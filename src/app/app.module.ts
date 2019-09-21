import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeMainContentComponent } from "./components/home-main-content/home-main-content.component";
import { HomeFooterComponent } from "./components/home-footer/home-footer.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ImagesComponent } from "./components/images/images.component";
import { UploadImageComponent } from './components/upload-image/upload-image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeMainContentComponent,
    HomeFooterComponent,
    DashboardComponent,
    ImagesComponent,
    UploadImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
