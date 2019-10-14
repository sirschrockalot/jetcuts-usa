import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HomepageComponent } from '../app/jetcuts/homepage/homepage.component';
import { NavbarComponent } from '../app/jetcuts/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './jetcuts/company/company.component';
import { FooterComponent } from './jetcuts/footer/footer.component';
import { QuoteComponent } from './jetcuts/quote/quote.component';
import { ServicesComponent } from './jetcuts/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    QuoteComponent,
    FooterComponent,

    CompanyComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
