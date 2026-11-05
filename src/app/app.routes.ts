import { Routes } from '@angular/router';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { Projects } from './pages/projects';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];
