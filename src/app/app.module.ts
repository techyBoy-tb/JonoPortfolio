import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BooksComponent } from './components/books/books.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { LeavingDialogComponent } from './components/dialog/leaving-dialog.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { InputComponent } from './components/input/input.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SocialComponent } from './components/social/social.component';
import { StatusDialogComponent } from './components/status-dialog/status-dialog.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { RoutingModule } from './routing/routing.module';
import { ApiService } from './services/api/api.service';
import { FormService } from './services/form/form.service';
import { CustomAngularMaterialModule } from './shared/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    AboutMeComponent,
    ContactMeComponent,
    BooksComponent,
    SocialComponent,
    FooterComponent,
    UpcomingComponent,
    LeavingDialogComponent,
    ReviewsComponent,
    InputComponent,
    StatusDialogComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    CustomAngularMaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    LeavingDialogComponent,
    StatusDialogComponent
  ],
  providers: [
    FormBuilder,
    FormService,
    ApiService,
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
