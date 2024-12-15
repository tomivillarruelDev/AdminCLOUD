import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard.component'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/home/home.component'),
        title: 'Dashboard',
      },
      {
        path: 'contacts',
        loadComponent: () => import('./pages/contacts/contacts.component'),
        title: 'Contacts',
      },
      {
        path: 'companies',
        loadComponent: () => import('./pages/companies/companies.component'),
        title: 'Companies',
      },
      {
        path: 'policies',
        loadComponent: () => import('./pages/policies/policies.component'),
        title: 'Policies',
      },
      {
        path: 'reports',
        loadComponent: () => import('./pages/reports/reports.component'),
        title: 'Reports',
      },
      {
        path: 'claims',
        loadComponent: () => import('./pages/claims/claims.component'),
        title: 'claims',
      },
      {
        path: 'commissions',
        loadComponent: () =>
          import('./pages/commissions/commissions.component'),
        title: 'Commissions',
      },
      {
        path: 'incentives',
        loadComponent: () => import('./pages/incentives/incentives.component'),
        title: 'Incentives',
      },
      {
        path: 'cash-flow',
        loadComponent: () => import('./pages/cash-flow/cash-flow.component'),
        title: 'Cash Flow',
      },
      {
        path: 'sales',
        loadComponent: () => import('./pages/sales/sales.component'),
        title: 'Sales',
      },
      {
        path: 'quotations',
        loadComponent: () => import('./pages/quotations/quotations.component'),
        title: 'quotations',
      },
      {
        path: 'options',
        loadComponent: () => import('./pages/options/options.component'),
        title: 'Options',
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
