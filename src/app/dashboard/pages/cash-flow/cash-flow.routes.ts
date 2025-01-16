import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cash-flow.component'),
    children: [
      {
        path: 'cash-flow-list',
        loadComponent: () =>
          import('./cash-flow-pages/cash-flow-list/cash-flow-list.component'),
        title: 'Cash Flow',
        data: {
          icon: '/icons/cash-flow-list.svg',
        },
      },
      {
        path: '**',
        redirectTo: 'cash-flow-list',
        pathMatch: 'full',
      }
    ],
  },
];
