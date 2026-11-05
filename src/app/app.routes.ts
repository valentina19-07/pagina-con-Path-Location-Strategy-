import { Routes } from '@angular/router';
import { Contact } from './pages/contact';
import { Projects } from './pages/projects';

export const routes: Routes = [
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '', pathMatch: 'full', redirectTo: 'projects' },
  { path: '**', redirectTo: 'projects' },
];
