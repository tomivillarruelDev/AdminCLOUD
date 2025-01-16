import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './setting.routes';
import { NavigationItems } from '@shared/components';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css',
})
export default class SettingComponent {
  public routes = routes[0].children ?? [];
}
