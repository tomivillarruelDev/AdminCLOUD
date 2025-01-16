import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./claims.component'),
    children: [
      {
        path: 'claims',
        loadComponent: () =>
          import('./claim-pages/claims-list/claims-list.component'),
        title: 'Claims',
        data: {
          icon: '/icons/claims.svg',
        },
      },
      {
        path: 'sinister',
        loadComponent: () =>
          import('./claim-pages/sinister/sinister.component'),
        title: 'Sinister',
        data: {
          icon: '/icons/sinister.sv',
        },
      },
      {
        path: '**',
        redirectTo: 'claims',
        pathMatch: 'full',
      },
    ],
  },
];
