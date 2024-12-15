import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [],
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavbarItemComponent {}
