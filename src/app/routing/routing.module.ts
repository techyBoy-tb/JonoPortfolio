import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';
import { BlogComponent } from '../components/blog/blog.component';
import { ExerptComponent } from '../components/exerpt/exerpt.component';
import { BooksComponent } from '../components/books/books.component';
import { SocialComponent } from '../components/social/social.component';

export const routes: Routes = [
  {
    path: 'error', component: ErrorPageComponent
  },
  {
    path: '', redirectTo: '/about', pathMatch: 'full'
  },
  {
    path: 'about', component: AboutMeComponent,
    data: { animation: 'One' }
  },
  {
    path: 'contact-me', component: ContactMeComponent,
    data: { animation: 'Two' }
  },
  {
    path: 'blog', component: BlogComponent,
    data: { animation: 'Three' }
  },
  {
    path: 'exerpt', component: ExerptComponent,
    data: { animation: 'isRight' }
  },
  {
    path: 'books', component: BooksComponent,
    data: { animation: 'isRight' }
  },
  {
    path: 'social', component: SocialComponent,
    data: { animation: 'isRight' }
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
