import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './reports.routes';
import { NavigationItems } from '@shared/components';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export default class ReportsComponent {
  public routes = routes[0].children ?? [];
}
