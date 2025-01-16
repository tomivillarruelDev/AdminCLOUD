import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./policies.component'),
    children: [
      {
        path: 'policies',
        title: 'Policies',
        loadComponent: () =>
          import('./policy-pages/policy-list/policy-list.component'),
        data: {
          icon: 'people',
        },
      },
      {
        path: 'renewals',
        title: 'Renewals',
        loadComponent: () =>
          import('./policy-pages/renewals/renewals.component'),
        data: {
          icon: 'people',
        },
      },
      {
        path: 'policies-by-status',
        title: 'Policies By Status',
        loadComponent: () =>
          import(
            './policy-pages/policies-by-status/policies-by-status.component'
          ),
        data: {
          icon: 'people',
        },
      },
      {
        path: 'payments',
        title: 'Payments',
        loadComponent: () =>
          import('./policy-pages/payments/payments.component'),
        data: {
          icon: 'people',
        },
      },
      {
        path: 'pending-policies',
        title: 'Pending Policies',
        loadComponent: () =>
          import(
            './policy-pages/pending-policies/pending-policies.component'
          ),
        data: {
          icon: 'people',
        },
      },
      {
        path: 'transactions',
        title: 'Transactions',
        loadComponent: () =>
          import('./policy-pages/transactions/transactions.component'),
        data: {
          icon: 'people',
        },
      },
      {
        path: '**',
        redirectTo: 'policies',
        pathMatch: 'full',
      }
    ],
  },
];
