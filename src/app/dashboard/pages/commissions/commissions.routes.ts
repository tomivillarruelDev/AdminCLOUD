import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./commissions.component'),
    children: [
      {
        path: 'commissions-list',
        loadComponent: () =>
          import(
            './commission-pages/commissions-list/commissions-list.component'
          ),
        title: 'Commissions',
        data: {
          icon: '/icons/commissions.svg',
        },
      },
      {
        path: 'pending-commissions',
        loadComponent: () =>
          import(
            './commission-pages/pending-commissions/pending-commissions.component'
          ),
        title: 'Pending Commissions',
        data: {
          icon: '/icons/pending-commissions.svg',
        },
      },
      {
        path: 'settlement-history',
        loadComponent: () =>
          import(
            './commission-pages/settlement-history/settlement-history.component'
          ),
        title: 'Settlement History',
        data: {
          icon: '/icons/settlement-history.svg',
        },
      },
      {
        path: 'commission-reports',
        loadComponent: () =>
          import(
            './commission-pages/commission-reports/commission-reports.component'
          ),
        title: 'Commission Reports',
        data: {
          icon: '/icons/commission-reports.svg',
        },
      },
      {
        path: '**',
        redirectTo: 'commissions-list',
        pathMatch: 'full',
      },
    ],
  },
];
