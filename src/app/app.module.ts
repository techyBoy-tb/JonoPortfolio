import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormMainComponent } from './components/form-main/form-main.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NewsComponent } from './components/news/news.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormMainComponent,
    ErrorPageComponent,
    NewsComponent,
    AboutMeComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
