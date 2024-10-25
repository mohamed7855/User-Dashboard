import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { NotFoundComponent } from './layout/addition/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },
];
