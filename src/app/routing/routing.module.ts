import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { BooksComponent } from '../components/books/books.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { SocialComponent } from '../components/social/social.component';
import { UpcomingComponent } from '../components/upcoming/upcoming.component';

export const routes: Routes = [
  {
    path: 'error', component: ErrorPageComponent
  },
  {
    path: '', redirectTo: '/about', pathMatch: 'full'
  },
  {
    path: 'about', component: AboutMeComponent
  },
  {
    path: 'contact-me', component: ContactMeComponent
  },
  {
    path: 'upcoming', component: UpcomingComponent
  },
  {
    path: 'books', component: BooksComponent
  },
  {
    path: 'social', component: SocialComponent
  },
  {
    path: 'reviews', component: ReviewsComponent
  },
  {
    path: '**', component: AboutMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
