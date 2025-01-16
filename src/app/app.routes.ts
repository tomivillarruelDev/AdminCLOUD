import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then(r => r.routes),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then(r => r.routes),
  },
  {
    path: '404',
    loadChildren: () => import('./shared/components/not-found/not-found.routes').then(r => r.routes),
  },
  {
    path: '**',
    redirectTo: '404',
  },
];
