import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('./pages/sign-in/sign-in.component'),
        title: 'Sign In',
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./pages/sign-up/sign-up.component'),
        title: 'Sign  Up',
      },
      {
        path: '**',
        redirectTo: 'sign-in',
        pathMatch: 'full',
      },
    ],
  },
];
