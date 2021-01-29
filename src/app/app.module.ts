import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TopSalesComponent } from './home/top-sales/top-sales.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { AdminPanelModule } from './admin-panel/admin-panel.module';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    HomeComponent,
    ContactUsComponent,
    TopSalesComponent,
    PortfolioComponent,
    ContactUsComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MegaMenuModule,
    ProductModule,
    FormsModule,
    // AdminPanelModule, //remove from app module and use lazy loadin feature.
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
