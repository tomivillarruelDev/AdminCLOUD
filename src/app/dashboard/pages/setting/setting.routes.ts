import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./setting.component'),
    children: [
      {
        path: 'ABM',
        loadComponent: () => import('./setting-pages/abm/abm.component'),
        title: 'ABM',
        data: {
          icon: '/icons/abm.svg',
        },
      },
      {
        path: 'info',
        loadComponent: () => import('./setting-pages/info/info.component'),
        title: 'Info',
        data: {
          icon: '/icons/info.svg',
        },
      },
      {
        path: '**',
        redirectTo: 'ABM',
        pathMatch: 'full',
      }
    ],
  },
];
