import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./quotations.component'),
    children: [
      {
        path: 'quotations-list',
        loadComponent: () =>
          import(
            './quotations-pages/quotations-list/quotations-list.component'
          ),
        title: 'Quotations List',
        data: {
          icon: '/icons/quotations-list.svg',
        },
      },
      {
        path: '**',
        redirectTo: 'quotations-list',
        pathMatch: 'full',
      },
    ],
  },
];
