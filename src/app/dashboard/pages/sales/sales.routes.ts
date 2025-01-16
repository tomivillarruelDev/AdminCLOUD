import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./sales.component'),
    children: [
      {
        path: 'CRM',
        loadComponent: () =>
          import('./sales-pages/crm/crm.component'),
        title: 'CRM',
        data: {
          icon: '/icons/CRM.svg',
        },
      },
      {
        path: '**',
        redirectTo: 'CRM',
        pathMatch: 'full',
      }
    ]
  }
]
