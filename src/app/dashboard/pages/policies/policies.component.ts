import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './policies.routes';
import { NavigationItems } from '@shared/components';

@Component({
  selector: 'app-policies',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css',
})
export default class PoliciesComponent {
  public routes = routes[0].children ?? [];
}
