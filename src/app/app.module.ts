import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angular4-social-login';

import { HomepageComponent } from '../app/jetcuts/homepage/homepage.component';
import { NavbarComponent } from '../app/jetcuts/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './jetcuts/company/company.component';
import { FileUploadComponent } from './jetcuts/file-upload/file-upload.component';
import { FooterComponent } from './jetcuts/footer/footer.component';
import { LoginPageComponent } from './jetcuts/login-page/login-page.component';
import { LoginComponent } from './jetcuts/login/login.component';
import { QuoteComponent } from './jetcuts/quote/quote.component';
import { ServicesComponent } from './jetcuts/services/services.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('1046402052746-sv27kut9cegppudp8qcgvlaiceam3018.apps.googleusercontent.com')
  }
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider('561602290896109')
  // },
  // {
  //   id: LinkedInLoginProvider.PROVIDER_ID,
  //   provider: new LinkedInLoginProvider("78iqy5cu2e1fgr")
  // }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    QuoteComponent,
    FooterComponent,
    LoginComponent,
    CompanyComponent,
    ServicesComponent,
    FileUploadComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
