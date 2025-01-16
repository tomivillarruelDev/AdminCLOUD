import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './incentives.routes';
import { NavigationItems } from '@shared/components';

@Component({
  selector: 'app-incentives',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './incentives.component.html',
  styleUrl: './incentives.component.css',
})
export default class IncentivesComponent {
  public routes = routes[0].children ?? [];
}
