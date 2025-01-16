import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './sales.routes';
import { NavigationItems } from '@shared/components';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css',
})
export default class SalesComponent {
  public routes = routes[0].children ?? [];
}
