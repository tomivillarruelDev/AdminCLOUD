import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth.component'),
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('./pages/sign-in/sign-in.component'),
        title: 'Sign In',
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
