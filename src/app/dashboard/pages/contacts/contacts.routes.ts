import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./contacts.component'),
    children: [
      {
        path: 'contacts',
        title: 'Contacts',
        loadComponent: () =>
          import('./contact-pages/contact-list/contact-list.component'),
      },
      {
        path: 'agents',
        title: 'Agents',
        loadComponent: () => import('./contact-pages/agents/agents.component'),
        data: {
          icon: 'people',
        },
      },
      {
        path: 'agencies',
        title: 'Agencies',
        loadComponent: () =>
          import('./contact-pages/agencies/agencies.component'),
        data: {
          icon: 'people',
        },
      },
      {
        path: 'agreements',
        title: 'Agreements',
        loadComponent: () =>
          import('./contact-pages/agreements/agreements.component'),
        data: {
          icon: 'people',
        },
      },
      {
        path: 'agreement levels',
        title: 'Agreement Levels',
        loadComponent: () =>
          import(
            './contact-pages/agreement-levels/agreement-levels.component'
          ),
        data: {
          icon: 'people',
        },
      },
      {
        path: 'businesses',
        title: 'Businesses',
        loadComponent: () =>
          import('./contact-pages/businesses/businesses.component'),
        data: {
          icon: 'people',
        },
      },
      {
        path: 'commercial-structure',
        title: 'Commercial Structure',
        loadComponent: () =>
          import(
            './contact-pages/commercial-structure/commercial-structure.component'
          ),
        data: {
          icon: 'people',
        },
      },
      {
        path: '**',
        redirectTo: 'contacts',
        pathMatch: 'full',
      },
    ],
  },
];
