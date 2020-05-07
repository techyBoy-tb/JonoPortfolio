import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FormMainComponent } from './components/form-main/form-main.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { BlogComponent } from './components/blog/blog.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomAngularMaterialModule } from './components/shared/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormMainComponent,
    ErrorPageComponent,
    BlogComponent,
    AboutMeComponent,
    ContactMeComponent,
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CustomAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
