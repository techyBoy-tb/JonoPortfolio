import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { BlogComponent } from './components/blog/blog.component';
import { BooksComponent } from './components/books/books.component';
import { ExerptComponent } from './components/exerpt/exerpt.component';
import { SocialComponent } from './components/social/social.component';
import { FooterComponent } from './components/layout/footer/footer.component';

import { CustomAngularMaterialModule } from './shared/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    BlogComponent,
    AboutMeComponent,
    ContactMeComponent,
    BooksComponent,
    ExerptComponent,
    SocialComponent,
    FooterComponent,
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
