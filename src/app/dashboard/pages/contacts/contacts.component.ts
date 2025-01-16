import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './contacts.routes';
import { NavigationItems } from '@shared/components';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [NavigationItems, RouterOutlet],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export default class ContactsComponent {
  public routes = routes[0].children ?? [];
}
