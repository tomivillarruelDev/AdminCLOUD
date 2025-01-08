import { Routes } from '@angular/router';

export const routes: Routes = [
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
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
