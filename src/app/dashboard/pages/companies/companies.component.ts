import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './companies.routes';
import { NavigationItems } from '@shared/components';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css',
})
export default class CompaniesComponent {
  public routes = routes[0].children ?? [];
}
