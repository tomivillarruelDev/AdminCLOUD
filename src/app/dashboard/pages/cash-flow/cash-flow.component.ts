import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './cash-flow.routes';
import { NavigationItems } from '@shared/components';

@Component({
  selector: 'app-cash-flow',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './cash-flow.component.html',
  styleUrl: './cash-flow.component.css',
})
export default class CashFlowComponent {
  public routes = routes[0].children ?? [];
}
