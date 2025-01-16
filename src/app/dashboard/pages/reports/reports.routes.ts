import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./reports.component'),
    children: [
      {
        path: 'reports',
        loadComponent: () => import('./report-pages/reports-page/reports-page.component'),
        title: 'Reports',
        data: {
          icon: '/icons/reports.svg',
        },
      },
      {
        path: 'automatic-reports',
        loadComponent: () => import('./report-pages/automatic-reports/automatic-reports.component'),
        title: 'Automatic Reports',
        data: {
          icon: '/icons/automatic-reports.svg',
        },
      },
      {
       path: 'create-report',
        loadComponent: () => import('./report-pages/create-report/create-report.component'),
        title: 'Create Report',
        data: {
          icon: '/icons/create-report.svg',
        },
      },
      {
        path: '**',
        redirectTo: 'reports',
        pathMatch: 'full',
      }
    ]
  }
];
