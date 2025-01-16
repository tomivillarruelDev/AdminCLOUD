import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./incentives.component'),
    children: [
      {
        path: 'incentive-list',
        loadComponent: () =>
          import('./incentive-pages/incentive-list/incentive-list.component'),
        title: 'Incentives',
        data: {
          icon: '/icons/incentive-list.svg',
        },
      },
      {
        path: '**',
        redirectTo: 'incentive-list',
        pathMatch: 'full',
      },
    ],
  },
];
