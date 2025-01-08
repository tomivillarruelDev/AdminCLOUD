import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard.component'),
    children: [
      {
        path: 'control-panel',
        loadComponent: () => import('./pages/control-panel/control-panel.component'),
        title: 'Control Panel',
        data: {
          icon: '/icons/control-panel.svg',
        },
      },
      {
        path: 'contacts',
        loadComponent: () => import('./pages/contacts/contacts.component'),
        title: 'Contacts',
        data: {
          icon: '/icons/contacts.svg',
        },
      },
      {
        path: 'companies',
        loadComponent: () => import('./pages/companies/companies.component'),
        title: 'Companies',
        data: {
          icon: '/icons/companies.svg',
        },
      },
      {
        path: 'policies',
        loadComponent: () => import('./pages/policies/policies.component'),
        title: 'Policies',
        data: {
          icon: '/icons/policies.svg',
        },
      },
      {
        path: 'reports',
        loadComponent: () => import('./pages/reports/reports.component'),
        title: 'Reports',
        data: {
          icon: '/icons/reports.svg',
        },
      },
      {
        path: 'claims',
        loadComponent: () => import('./pages/claims/claims.component'),
        title: 'Claims',
        data: {
          icon: '/icons/claims.svg',
        },
      },
      {
        path: 'commissions',
        loadComponent: () =>
          import('./pages/commissions/commissions.component'),
        title: 'Commissions',
        data: {
          icon: '/icons/commissions.svg',
        },
      },
      {
        path: 'incentives',
        loadComponent: () => import('./pages/incentives/incentives.component'),
        title: 'Incentives',
        data: {
          icon: '/icons/incentives.svg',
        },
      },
      {
        path: 'cash-flow',
        loadComponent: () => import('./pages/cash-flow/cash-flow.component'),
        title: 'Cash Flow',
        data: {
          icon: '/icons/cash-flow.svg',
        },
      },
      {
        path: 'sales',
        loadComponent: () => import('./pages/sales/sales.component'),
        title: 'Sales',
        data: {
          icon: '/icons/sales.svg',
        },
      },
      {
        path: 'quotations',
        loadComponent: () => import('./pages/quotations/quotations.component'),
        title: 'Quotations',
        data: {
          icon: '/icons/quotations.svg',
        },
      },
      {
        path: 'options',
        loadComponent: () => import('./pages/options/options.component'),
        title: 'Options',
        data: {
          icon: '/icons/options.svg',
        },
      },
      {
        path: '**',
        redirectTo: 'control-panel',
        pathMatch: 'full',
      },
    ],
  },
];
