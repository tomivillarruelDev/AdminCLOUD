import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./companies.component'),
    children: [
      {
        path: 'companies',
        title: 'Companies',
        loadComponent: () => import('./company-pages/company-list/company-list.component'),
        data: {
          icon: 'people'
        }
      },
      {
        path: 'branches',
        title: 'Branches',
        loadComponent: () => import('./company-pages/branches/branches.component'),
        data: {
          icon: 'people'
        }
      },
      {
        path: 'riders',
        title: 'Riders',
        loadComponent: () => import('./company-pages/riders/riders.component'),
        data: {
          icon: 'people'
        }
      },
      {
        path: 'products',
        title: 'Products',
        loadComponent: () => import('./company-pages/products/products.component'),
        data: {
          icon: 'people'
        }
      },
      {
        path: 'plans',
        title: 'Plans',
        loadComponent: () => import('./company-pages/plans/plans.component'),
        data: {
          icon: 'people'
        }
      },
      {
        path: '**',
        redirectTo: 'companies',
        pathMatch: 'full'
      },
    ]
  }
]
