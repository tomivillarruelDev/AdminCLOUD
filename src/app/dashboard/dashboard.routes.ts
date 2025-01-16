import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard.component'),
    children: [
      {
        path: 'control-panel',
        loadComponent: () =>
          import('./pages/control-panel/control-panel.component'),
        title: 'Control Panel',
        data: {
          icon: '/icons/control-panel.svg',
        },
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./pages/contacts/contacts.routes').then(m => m.routes),
        title: 'Contacts',
        data: {
          icon: '/icons/contacts.svg',
        },
      },
      {
        path: 'companies',
        loadChildren: () =>
          import('./pages/companies/companies.routes').then(m => m.routes),
        title: 'Companies',
        data: {
          icon: '/icons/companies.svg',
        },
      },
      {
        path: 'policies',
        loadChildren: () =>
          import('./pages/policies/policies.routes').then(m => m.routes),
        title: 'Policies',
        data: {
          icon: '/icons/policies.svg',
        },
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./pages/reports/reports.routes').then(m => m.routes),
        title: 'Reports',
        data: {
          icon: '/icons/reports.svg',
        },
      },
      {
        path: 'claims',
        loadChildren: () =>
          import('./pages/claims/claims.routes').then(m => m.routes),
        title: 'Claims',
        data: {
          icon: '/icons/claims.svg',
        },
      },
      {
        path: 'commissions',
        loadChildren: () =>
          import('./pages/commissions/commissions.routes').then(m => m.routes),
        title: 'Commissions',
        data: {
          icon: '/icons/commissions.svg',
        },
      },
      {
        path: 'incentives',
        loadChildren: () =>
          import('./pages/incentives/incentives.routes').then(m => m.routes),
        title: 'Incentives',
        data: {
          icon: '/icons/incentives.svg',
        },
      },
      {
        path: 'cash-flow',
        title: 'Cash Flow',
        loadChildren: () =>
          import('./pages/cash-flow/cash-flow.routes').then(m => m.routes),
        data: {
          icon: '/icons/cash-flow.svg',
        },
      },
      {
        path: 'sales',
        loadChildren: () =>
          import('./pages/sales/sales.routes').then(m => m.routes),
        title: 'Sales',
        data: {
          icon: '/icons/sales.svg',
        },
      },
      {
        path: 'quotations',
        loadChildren: () =>
          import('./pages/quotations/quotations.routes').then(m => m.routes),
        title: 'Quotations',
        data: {
          icon: '/icons/quotations.svg',
        },
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./pages/setting/setting.routes').then(m => m.routes),
        title: 'Setting',
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
