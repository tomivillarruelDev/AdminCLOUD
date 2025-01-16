import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './quotations.routes';
import { NavigationItems } from '@shared/components';

@Component({
  selector: 'app-quotations',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './quotations.component.html',
  styleUrl: './quotations.component.css',
})
export default class QuotationsComponent {
    public routes = routes[0].children ?? [];
}
