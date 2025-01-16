import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationItems } from '@shared/components';
import { routes } from './claims.routes';

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './claims.component.html',
  styleUrl: './claims.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClaimsComponent {
  public routes = routes[0].children ?? [];
}
