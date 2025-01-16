import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './commissions.routes';
import { NavigationItems } from '@shared/components';

@Component({
  selector: 'app-commissions',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './commissions.component.html',
  styleUrl: './commissions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommissionsComponent {
  public routes = routes[0].children ?? [];
}
