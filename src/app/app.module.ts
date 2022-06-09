import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LocationComponent } from './location/location.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityViewComponent } from './activity-view/activity-view.component';
import { CouponsComponent } from './coupons/coupons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BrandsComponent,
    LoginComponent,
    SignupComponent,
    LocationComponent,
    ActivitiesComponent,
    ActivityViewComponent,
    CouponsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
